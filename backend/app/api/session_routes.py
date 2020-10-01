from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import User, db
from flask_jwt_extended import create_access_token, jwt_required
from flask_login import current_user

session_routes = Blueprint('session', __name__)

@session_routes.route('', methods=['POST', 'DELETE'])
def login_user():
  if(request.method=='POST'):
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    user = User.query.filter(User.email==email).first()
    user_data = user.to_dict()
    if(user and user.check_password(password)):
      session['user']= user.to_dict()
      return {"user": session['user']}, 200
    else:
      return jsonify({"msg": "Incorrect email or password."}), 400
  elif(request.method=='DELETE'):
    session.pop('user', None)
    return {'msg': 'successfully logged out'}


@session_routes.route('/current', methods=['GET'])
def load_user():
  if 'user' in session:
    user = session['user']
    return {"user": session['user']}, 200
  else:
    return {"msg": "user not loaded"}

# @user_routes.route('/logout', methods= ['DELETE'])
# def logout():
#   session.pop('csrf_token', None)

# @user_routes.route('/signup', methods=['POST'])
# def signup_user():
#   try:
#     user = User(
#         username=request.json.get('username', None),
#         email=request.json.get('email', None),
#         password=request.json.get('password', None)
#     )
#     db.session.add(user)
#     db.session.commit()
#     email= user.email
#     access_token = create_access_token(identity=email)
#     return {"token": access_token, "user": user.to_dict()}, 200
#   except:
#     return jsonify({"msg": "Bad data for signup."}), 400

# @login_manager.user_loader
# def load_user(user_id):
#   print(User.get(user_id))
#   return User.get(user_id)



