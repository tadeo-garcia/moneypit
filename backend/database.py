from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Category, Project, Pledge, Reward
import random
from projects import data

with app.app_context():
  db.drop_all()
  db.create_all()

# USERS
  ian = User(username = 'Ian', email = 'ian@aa.io', password = 'password')
  javier = User(username = 'Javier', email = 'javier@aa.io', password = 'password')
  dean = User(username = 'Dean', email = 'dean@aa.io', password = 'password')
  angela = User(username = 'Angela', email = 'angela@aa.io', password = 'password')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', password = 'password')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', password = 'password')
  demo = User(username = 'Demo', email = 'demo@moneypit.com', password = 'password')

  

  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)
  db.session.add(demo)



# CATEGORIES
  hardware = Category(id = 52, title = "Hardware")
  apps = Category(id = 332, title = "Apps")
  printing = Category(id= 331, title = "3D Printing")
  software = Category(id = 51, title = "Software")
  robots = Category(id = 338, title = "Robots")
  gadgets = Category(id = 337, title = "Gadgets")
  web = Category(id = 342, title = "Web")
  wearables = Category(id = 341, title = "Wearables")

  db.session.add(hardware)
  db.session.add(apps)
  db.session.add(printing)
  db.session.add(software)
  db.session.add(robots)
  db.session.add(gadgets)
  db.session.add(web)
  db.session.add(wearables)


# PROJECTS
  for project in data:
    random_id = random.randrange(1,6)
    project_to_add = Project(id = project["id"], title = project["name"], owner_id = random_id, pic = project["photo"], description = project["description"], funding_goal = project["goal"], category_id = project["categoryId"], total_funding = project["pledged"], total_pledges = project["backers_count"], organization = project["creatorName"], avatar = project["creatorAvatar"], location = project["locationName"] )

    db.session.add(project_to_add)

  
  db.session.commit()