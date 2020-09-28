from flask import Blueprint, jsonify, redirect, url_for
from app.models import User
from flask_login import current_user, login_user, logout_user,login_required


user_routes = Blueprint('users', __name__)
routes = Blueprint('routes', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  return { "users": [user.to_dict() for user in response]}

@routes.route("/")
def index():
    return render_template("home.html")

@routes.route("/projects/<int:id>")
def pledge(id):
    if current_user.is_authenticated:
        return render_template("pledge.html")
    else:
        return redirect(url_for(".login"))
