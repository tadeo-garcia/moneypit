from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime

db = SQLAlchemy()

user_rewards = db.Table('user_rewards',
  db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
  db.Column('reward_id', db.Integer, db.ForeignKey('rewards.id'), primary_key=True)
)

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(30), nullable=False)
  email = db.Column(db.String(30), nullable=False, unique=True)
  hashed_password = db.Column(db.String(100), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  user_rewards = db.relationship("Reward", secondary=user_rewards, lazy='subquery',
                                backref=db.backref('users', lazy=True))
  # projects = db.relationship("Project", foreign_keys = [id])

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

class Project(db.Model):
  __tablename__ = 'projects'

  id = db.Column(db.Integer, primary_key=True, nullable=False)
  owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  title = db.Column(db.String(1000), nullable=False)
  description = db.Column(db.String(1000), nullable=False)
  organization = db.Column(db.String(50))
  avatar = db.Column(db.String(1000))
  location = db.Column(db.String(1000), nullable=False)
  pic = db.Column(db.String(300), nullable=False)
  category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
  funding_goal = db.Column(db.Integer, nullable=False, default=0)
  total_funding = db.Column(db.Integer, nullable=False, default=0)
  launch_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  end_date = db.Column(db.DateTime, nullable=False, default= "2030-10-28 23:06:16.227442")
  total_pledges = db.Column(db.Integer, default=0)
  days_remaining = db.Column(db.Integer, default=20)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  owner = db.relationship("User", foreign_keys=[owner_id])
  project_rewards = db.relationship("Reward", lazy='subquery')

  def increment(self):
    self.total_pledges += 1

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "owner_id": self.owner_id,
      "description": self.description,
      "organization": self.organization,
      "avatar": self.avatar,
      "location": self.location,
      "days_remaining": self.days_remaining,
      "category_id": self.category_id,
      "pic": self.pic,
      "funding_goal": self.funding_goal,
      "total_funding": self.total_funding,
      "launch_date": self.launch_date,
      "end_date": self.end_date,
      "total_pledges": self.total_pledges
    }

class Category(db.Model):
  __tablename__ = 'categories'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(50), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title
    }


class Pledge(db.Model):
  __tablename__ = 'pledges'

  id = db.Column(db.Integer, primary_key=True)
  pledge_amount = db.Column(db.Integer, nullable=False)
  reward_id = db.Column(db.Integer)
  backer_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  
  backer = db.relationship("User", foreign_keys=[backer_id])
  project = db.relationship("Project", foreign_keys=[project_id])
  # def to_dict():
  #   return {
  #     "id": self.id,
  #     "pledge_amount": self.pledge_amount,
  #     "reward_id": self.reward_id,
  #     "backer_id": self.backer_id,
  #     "project_id": self.project_id
  #   }

class Reward(db.Model):
  __tablename__ = 'rewards'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(50), nullable=False)
  minimum_donation = db.Column(db.Integer, nullable=False)
  picture = db.Column(db.String)
  description = db.Column(db.Text, nullable=False)
  delivery_date = db.Column(db.DateTime)
  reward_count = db.Column(db.Integer, default=0)
  project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
  created_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
  updated_at = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  def increment(self):
    self.reward_count += 1

  # def to_dict():
  #   return {
  #     "id": self.id,
  #     "title": self.title,
  #     "minimum_donation": self.minimum_donation,
  #     "picture": self.picture,
  #     "description": self.description,
  #     "delivery_date": self.delivery_date,
  #     "reward_count": self.reward_count,
  #     "project_id": self.project_id
  #   }


# class User_Reward(db.Model):
#   __tablename__ = 'user_rewards'

#   id = db.Column(db.Integer, primary_key=True)
#   project_id = db.Column(db.Integer, db.ForeignKey("projects.id"), nullable=False)
#   reward_id = db.Column(db.Integer, db.ForeignKey("rewards.id"), nullable=False)
