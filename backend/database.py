from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Category, Project, Pledge, Reward

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



# CATEGORIES
  scifi = Category(title = "Science Fiction")
  games = Category(title = "Games")
  books = Category(title = "Books")

  db.session.add(scifi)
  db.session.add(games)
  db.session.add(books)



# PROJECTS
  project1 = Project(owner_id = 1, location = "Seattle", category_id = 1, funding_goal = 50000, description = "Projects are so fun")
  project2 = Project(owner_id = 2, location = "Dallas", category_id = 2, funding_goal = 250000, description = "Projects are so fun")
  project3 = Project(owner_id = 3, location = "Paris", category_id = 3, funding_goal = 10, description = "Projects are so fun")
  project4 = Project(owner_id = 2, location = "Albuquerque", category_id = 2, funding_goal = 10000, description = "This is project 4")
  project5 = Project(owner_id = 2, location = "Tampa", category_id = 2, funding_goal = 1250000, description = "This is project 5")

  
  db.session.add(project1)
  db.session.add(project2)
  db.session.add(project3)
  db.session.add(project4)
  db.session.add(project5)
  
  db.session.commit()