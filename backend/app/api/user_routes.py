from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import User, db
from flask_jwt_extended import create_access_token, jwt_required
from flask_login import current_user

user_routes = Blueprint('users', __name__)


@user_routes.route('/signup', methods=['POST'])
def signup_user():
  try:
    user = User(
        username=request.json.get('username', None),
        email=request.json.get('email', None),
        password=request.json.get('password', None)
    )
    db.session.add(user)
    db.session.commit()
    email= user.email
    session["user"]= user.to_dict()
    return {"user": user.to_dict()}, 200
  except:
    return jsonify({"msg": "Bad data for signup."}), 400