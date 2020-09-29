from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import Category

projects_routes = Blueprint('projects', __name__)

@projects_routes.route('/categories')
def get_categories():
    categories = Category.query.all()
    print(categories)
    data = [category.to_dict for category in categories]
    # return { "users": [user.to_dict() for user in response]}
    print("~~~")
    print(data)
    # print(data)
    return {"data:": categories}