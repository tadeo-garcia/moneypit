from flask import Blueprint, jsonify, redirect, url_for, session, request
from app.models import Category, Project, Pledge, Reward, db

projects_routes = Blueprint('projects', __name__)

@projects_routes.route('/categories')
def get_categories():
    categories = Category.query.all()
    data = [category.to_dict() for category in categories]
    for category in data:
      category["length"] = len(Project.query.filter(Project.category_id==category["id"]).all())
    return {"categories": data}

@projects_routes.route('category_by_id')
def load_user():
  user_id = request.args.get('id', None)
  categories = Category.query.all()
  pledges = Pledge.query.filter(Pledge.backer_id==user_id).with_entities(Pledge.project_id).distinct()
  projects = [Project.query.filter(Project.id==pledge.project_id).one() for pledge in pledges]
  data = [category.to_dict() for category in categories]
  data2 = [project.to_dict() for project in projects]

  for category in data:
    category["length"] = 0
    for project in data2:
      if project["category_id"] == category["id"]:
        category["length"] += 1
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
    return {"projects": data}

@projects_routes.route('/projects_by_id')
def get_by_id():
    user_id = request.args.get('id', None)
    projects = Project.query.filter(Project.owner_id==user_id).all()
    data = [project.to_dict() for project in projects]
    return {"projects": data}, 200

@projects_routes.route('/projects_by_category_and_id')
def get_by_id_and_category():
    user_id = request.args.get('id', None)
    category_id = request.args.get('category', None)
    pledges = Pledge.query.filter(Pledge.backer_id==user_id).with_entities(Pledge.project_id).distinct()
    projects_data = [Project.query.filter(Project.id==pledge.project_id, Project.category_id==category_id).first() for pledge in pledges]
    projects = []
    for val in projects_data:
      if val != None :
        projects.append(val)
    data = [project.to_dict() for project in projects]
    return {"projects": data}, 200

@projects_routes.route('/projects_by_pledge')
def get_projects_by_id():
    user_id = request.args.get('id', None)
    pledges = Pledge.query.filter(Pledge.backer_id==user_id).with_entities(Pledge.project_id).distinct()
    projects = [Project.query.filter(Project.id==pledge.project_id).one() for pledge in pledges]
    data = [project.to_dict() for project in projects]
    return {"projects": data}, 200

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
  # try:
    print("Getting here")
    print(request.json.get('categoryImage'))
    print(request.json.get('categoryId'))
    project = Project(
      owner_id= request.json.get('userId'),
      title = request.json.get('title'),
      description = request.json.get('description'),
      organization = 'Demo Boys, Inc.',
      location = 'Seattle, WA',
      funding_goal = int(request.json.get('fundingGoal')),
      pic = request.json.get('categoryImage'),
      category_id = request.json.get('categoryId')
    )
    db.session.add(project)
    db.session.commit()
    return {"project": project.to_dict()}, 200
  # except:
  #   return jsonify({"msg": "Unsuccessful project build."})


@projects_routes.route('/search_by_featured')
def get_featured_projects():
    projects = Project.query.filter(Project.staff_pick==True).all()
    data = [project.to_dict() for project in projects]
    return {"projects": data}

@projects_routes.route('/submit_pledge', methods=['POST'])
def submit_pledge():
  project_id = int(request.json.get('projectId', None))
  reward_id = int(request.json.get('rewardId', None))
  pledge_amount = int(request.json.get('pledgeAmount', None))
  backer_id = int(request.json.get('userId', None))
  try:
      pledge = Pledge(
        pledge_amount=pledge_amount,
        reward_id=reward_id,
        backer_id=backer_id,
        project_id=project_id
      )
      db.session.add(pledge)
      db.session.commit()
      pledges = Pledge.query.filter(Pledge.backer_id==backer_id, Pledge.project_id==project_id).all()
      project = Project.query.get(project_id)
      if len(pledges) < 2:
        project.increase_pledge()
      reward = Reward.query.get(reward_id)
      pledgeRewards = Pledge.query.filter(Pledge.backer_id==backer_id, Pledge.reward_id==reward_id).all()
      if len(pledgeRewards)==1:
        reward.increment()
      project.increment(pledge_amount)
      db.session.add(project)
      db.session.add(reward)
      db.session.commit()
      rewards = Reward.query.filter(Reward.project_id==project_id).order_by("id").all()
      rewards = [reward.to_dict() for reward in rewards]
      project = project.to_dict()
      return {"project": project, "rewards": rewards}, 200
  except:
      # print(traceback.format_exc())
      return jsonify({"msg": "Bad data for pledge."}), 400
