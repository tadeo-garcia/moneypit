from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import Category

projects_routes = Blueprint('projects', __name__)

@projects_routes.route('/categories')
def get_categories():
    categories = Category.query.all()
    data = [category.to_dict() for category in categories]
    return {"categories": data}