const GET_PROJECT = 'project/single';
const GET_PROJECTS_BY_CATEGORY = 'project/get_by_category';
const GET_PROJECTS_BY_OWNER = 'project/get_by_owner';

export const loadProjectsByOwner = (projects) => {
  return {
    type: GET_PROJECTS_BY_OWNER,
    projects: projects
  }
}

export const loadProject = (project) => {
    return {
        type: GET_PROJECT,
        project: project
    }
}

export const loadProjectsByCategory = (projects) => {
  return {
      type: GET_PROJECTS_BY_CATEGORY,
      projects: projects
  }
}

export const getProject = (projectID) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/search_by_id?id=${projectID}`, {
      method: "get"
    })
  
  res.data = await res.json();
  if (res.ok) {
    dispatch(loadProject(res.data.project))
  }
    return res;
  }
}

export const getProjectsByCategory = (category) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/search_by_category?category=${category}`, {
      method: "get",
    })
    
  res.data = await res.json();
  if (res.ok) {
    dispatch(loadProjectsByCategory(res.data.projects))
  }
    return res;
  }
}

export const getProjectsByOwner = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/projects_by_id?id=${id}`, {
      method: "get",
    })
    
  res.data = await res.json();
  if (res.ok) {
    dispatch(loadProjectsByOwner(res.data.projects))
  }
    return res;
  }
}

export default function projectsReducer(state={}, action) {
  switch (action.type) {
      case GET_PROJECT:
          return {...state, project: action.project};
      case GET_PROJECTS_BY_CATEGORY:
        return {...state, projects: action.projects};
      case GET_PROJECTS_BY_OWNER:
        return {...state, projectsOwner: action.projects}
      default:
          return state;
  }
}