from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import Category, Project

projects_routes = Blueprint('projects', __name__)

@projects_routes.route('/categories')
def get_categories():
    categories = Category.query.all()
    data = [category.to_dict() for category in categories]
    return {"categories": data}

@projects_routes.route('/search_by_category')
def get_by_category():
    category_search = request.args.get('category', None)
    category = Category.query.filter(Category.title.ilike(category_search.strip())).one()
    projects = Project.query.filter(Project.category_id==category.id).all()
    data = [project.to_dict() for project in projects]
    return {"projects": data}

@projects_routes.route('/:id')
def get_project():
    projectID = request.json.get('projectID', None)
    project = Project.query.get(projectID)
    return {"project": project.to_dict()}, 200