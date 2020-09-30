from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Category

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
<<<<<<< HEAD
  
  
=======
  demo = User(username = 'Demo', email = 'demo@moneypit.com', password = 'password')

>>>>>>> 26bc7aedac3b594ccd727a8299d158bfdf3e5833
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

  db.session.commit()
