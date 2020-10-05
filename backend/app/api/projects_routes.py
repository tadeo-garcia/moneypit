from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import Category, Project, Pledge, Reward

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

@projects_routes.route('/projects_by_title')
def get_by_title():
    title = f"%{request.args.get('title')}%"
    projects = Project.query.filter(Project.title.ilike(title)).limit(4)
    data = [project.to_dict() for project in projects]
    titles = [project["title"] for project in data]
    print(titles)
    return {"projects": data}

@projects_routes.route('/projects_by_id')
def get_by_id():
    user_id = request.args.get('id', None)
    projects = Project.query.filter(Project.owner_id==user_id).all()
    data = [project.to_dict() for project in projects]
    return {"projects": data}

@projects_routes.route('/projects_by_pledge')
def get_projects_by_id():
    user_id = request.args.get('id', None)
    pledges = Pledge.query.filter(Pledge.backer_id==user_id).all()
    projects = [Project.query.filter(Project.id==pledge.project_id).one() for pledge in pledges]
    data = [project.to_dict() for project in projects]
    return {"projects": data}

@projects_routes.route('/search_by_id')
def get_project():
    projectID = request.args.get('id', None)
    project = Project.query.get(projectID)
    rewards = Reward.query.filter(Reward.project_id==project.id).all()
    rewards = [reward.to_dict() for reward in rewards]
    project = project.to_dict()
    return {"project": project, "rewards": rewards}, 200

@projects_routes.route('/build', methods=['POST'])
def build_project():
    try:
        project = Project(
            owner_id= request.json.get('userId')
            title = request.json.get('title')
            description = request.json.get('description')
            organization = 'Demo Street, Inc'
            location = 'Seattle, WA'
            funding_goal = int(request.json.get('fundingGoal'))
            pic = request.json.get('pic')
            category_id = request.json.get('categoryId')
        )
        db.session.add(project)
        db.session.commit()
    except:
        return jsonify({"msg": "Successfully created project."})
