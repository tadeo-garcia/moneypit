from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.orm import relationship
from flask_login import UserMixin

db = SQLAlchemy()

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(30), nullable=False)
  first_name = db.Column(db.String(30))
  last_name = db.Column(db.String(30))
  email = db.Column(db.String(30), nullable=False, unique=True)
  hashed_password = db.Column(db.String(100), nullable=False)

  @property
  def password(self):
      return self.hashed_password

  @password.setter
  def password(self, password):
      self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
      return check_password_hash(self.password, password)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }


# class Category(db.Model):
#     __tablename__ = 'categories'
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(50), nullable=False)


# class Pledge(db.Model):
#     __tablename__ = 'pledges'
#     id = db.Column(db.Integer, primary_key=True)
#     pledge_amount = db.Column(db.Integer, nullable=False)
#     reward_id = db.Column(db.Integer)
#     pledge_date = db.Column(db.DateTime, nullable=False,
#                             server_default=func.now())
#     # Do we want a static method, or to query the join tables?
#     total_pledges = db.Column(db.Integer, server_default=0)
#     backer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
#     project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

#     def increment(self):
#         self.total_pledges += 1


# class Reward(db.Model):
#     __tablename__ = 'rewards'
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(50), nullable=False)
#     minimum_donation = db.Column(db.Integer, nullable=False)
#     picture = db.Column(db.String)
#     description = db.Column(db.Text, nullable=False)
#     delivery_date = db.Column(db.DateTime, nullable=False)
#     # Do we want a static method, or to query the join tables?
#     total_rewards = db.Column(db.Integer, server_default=0)
#     project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)

#     def increment(self):
#         self.total_rewards += 1


# class Earned_Reward(db.Model):
#         __tablename__ = 'earned_rewards'
#     id = db.Column(db.Integer, primary_key=True)
#     project_id = Column(Integer, ForeignKey("projects.id"), nullable=False)
#     owner_id = Column(Integer, ForeignKey("users.id"), nullable=False)
