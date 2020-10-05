from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Category, Project, Pledge, Reward
import random
from projects import data
import datetime

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
  demo = User(id = 555, username = 'Demo', email = 'demo@moneypit.com', password = 'password')

  

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

#   id
#   title = db.Column(db.String(50), nullable=False)
#   minimum_donation = db.Column(db.Integer, nullable=False)
#   picture = db.Column(db.String)
#   description = db.Column(db.Text, nullable=False)
#   reward_count = db.Column(db.Integer, default=0)
#   project.backers_count
# PROJECTS
  for project in data:
    if project["creatorId"] == 555:
      random_id = 555
    else:
      random_id = random.randrange(1,6)
    min_donation = random.randrange(5, 20, 5)
    min_donation2 = random.randrange(min_donation + 10, 50, 5)
    min_donation3 = random.randrange(min_donation2 + 30, 150, 5)

    start_date = datetime.date(2022, 1, 1)
    end_date = datetime.date(2027, 2, 1)

    time_between_dates = end_date - start_date
    days_between_dates = time_between_dates.days
    random_number_of_days = random.randrange(days_between_dates)
    random_date = start_date + datetime.timedelta(days=random_number_of_days)
    
    
    reward_1_title = ["Super Early Bird Reward", "Early Bird Reward", "Tier 1 Reward", "Thank you for your support", "New Member", "Swag Pack"]
    reward_2_title = ["Lunar astronaut", "Early Bird Vizy (2GB)", "Shell Backpack | SuperEarlyBird", "1 LARQ Pitcher (Kickstarter Special)", "Tier 1- 1 Eterna Challenge Coin", "Ambassador", "Shell + Wardrobe SuperEarlyBird"]
    reward_3_title = ["Classic Edition", "EarlyBird Vizy (4GB)", "2-Pack Luna Display", "Shell+ Wardrobe +1 Acc | SuperEarlyBird", "1 LARQ Pitcher + 4 Advanced Filters", "Super Early Bird (Tier 4) 6 Coins", "S-Early BirdTWO CYCLOPES"]
    
    
    project_to_add = Project(id = project["id"], staff_pick = project["staff_pick"], end_date = random_date, title = project["name"], owner_id = random_id, pic = project["photo"], description = project["description"], funding_goal = project["goal"], category_id = project["categoryId"], total_funding = project["pledged"], total_pledges = project["backers_count"], organization = project["creatorName"], avatar = project["creatorAvatar"], location = project["locationName"] )
    reward1 = Reward(project_id = project["id"], delivery_date = random_date + datetime.timedelta(days = random.randrange(30,120)), minimum_donation = min_donation, title = reward_1_title[random.randrange(0, len(reward_1_title) - 1)], description = "Limited Early Bird Specials Tier 1 Reward just for you.  Brilliantly Shipping and taxes will be collected after the campaign. Rewards with Advanced Filter add-ons will ship Q1.  See campaign page for details.", reward_count = round(project["backers_count"] * 0.5) )
    reward2 = Reward(project_id = project["id"], delivery_date = random_date + datetime.timedelta(days = random.randrange(30,120)), minimum_donation = min_donation2, title = reward_2_title[random.randrange(0, len(reward_2_title) - 1)], description = "Limited Early Bird Medium Tier Reward just for you.  Recieve all Tier 1 rewards, as well as the Medium Tier Reward.  Brilliantly Shipping and taxes will be collected after the campaign. Rewards with Advanced Filter add-ons will ship Q1. See campaign page for details.", reward_count = round(project["backers_count"] * 0.35 ))
    reward3 = Reward(project_id = project["id"], delivery_date = random_date + datetime.timedelta(days = random.randrange(30,120)), minimum_donation = min_donation3, title = reward_3_title[random.randrange(0, len(reward_3_title) - 1)], description = "Limited Early Bird Deluxe Tier Reward just for you.  Receive all Tier 1 and Medium Tier rewards, as well as the Deluxe Tier Rward.  Shipping and taxes will be collected after the campaign. Rewards with Advanced Filter add-ons will ship Q1. See campaign page for details.", reward_count = round(project["backers_count"] * 0.15 ))
    
    db.session.add(project_to_add)
    db.session.add(reward1)
    db.session.add(reward2)
    db.session.add(reward3)


# PLEDGES

  pledge1 = Pledge(project_id = 1431129851, pledge_amount = 100, backer_id = 555)
  pledge2 = Pledge(project_id = 1273059917, pledge_amount = 100, backer_id = 555)
  pledge3 = Pledge(project_id = 1898415545, pledge_amount = 100, backer_id = 555)

  db.session.add(pledge1)
  db.session.add(pledge2)
  db.session.add(pledge3)

  
  db.session.commit()