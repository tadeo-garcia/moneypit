from flask import Blueprint, jsonify, redirect, url_for, session
from app.models import User
from flask_jwt_extended import create_access_token, jwt_required


user_routes = Blueprint('users', __name__, url_prefix='/session')

@user_routes.route('/login', methods=['PUT'])
def login_user():
  email = request.json.get('email', None)
  if not email:
    return jsonify("msg": "Please enter email."), 400

  password = request.json.get('password', None)
  if not password:
    return jsonify("msg": "Please enter password."), 400

  user = User.query.filter(User.email=email).one()
  if(user.check_password(password)):
    access_token = create_access_token(identity=email)
    return {"token": access_token, "user": user.to_dict()}, 200
  else: 
    return jsonify("msg": "Incorrect email or password."), 400
    
@user_routes.route('/signup', methods=['POST'])
def signup_user():
  try:
    data = request.json.get()
    
    user = User(
        email=data['email']
        password=data['password'] # Maybe a problem?
        username=data['username']
    )
    db.session.add(user)
    db.session.commit()
    email= user.email
    access_token = create_access_token(identity=email)
    return {"token": access_token, "user": user.to_dict()}, 200
  except:
    return jsonify{"msg": "Bad data for signup."}, 400

@user_routes.route('/logout', methods= ['DELETE'])
def logout():
    logout_user()

from flask import make_response

@app.route('/')
def index():
    resp = make_response(render_template(...))
    resp.set_cookie('username', 'the username')
    return resp

resp.set_cookie('sessionID', '', expires=0)