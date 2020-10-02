const GET_PROJECT = 'project/single';
const GET_PROJECTS_BY_CATEGORY = 'project/get_by_category';
const GET_PROJECTS_BY_OWNER = 'project/get_by_owner';
const GET_PROJECTS_BY_PLEDGE = 'project/get_by_pledge';
const GET_PROJECTS_BY_TITLE = '/project/get_by_title';
const GET_FEATURED_PROJECTS = 'project/get_featured';

export const loadProjectsByOwner = (projects) => {
  return {
    type: GET_PROJECTS_BY_OWNER,
    projects: projects
  }
}

export const loadFeaturedProjects = (projects) => {
  return {
    type: GET_FEATURED_PROJECTS,
    projects: projects
  }
}

export const loadProjectsByPledge = (projects) => {
  return {
    type: GET_PROJECTS_BY_PLEDGE,
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

export const loadProjectsByTitle = (projects) => {
  return {
    type: GET_PROJECTS_BY_TITLE,
    projects: projects
  }
}

export const getProject = (projectID) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/search_by_id?id=${projectID}`, {
      method: "get"
    })

  res.data = await res.json();
  let project = res.data.project
  let rewards = res.data.rewards
  project.rewards = rewards
  if (res.ok) {
    dispatch(loadProject(res.data.project))
  }
    return res;
  }
}

export const getFeaturedProjects = () => {
  return async dispatch => {
    console.log("~~~~~")
    const res = await fetch('/api/projects/search_by_featured', {
      method: "get"
    })
    res.data = await res.json();
    if(res.ok) {
      dispatch(loadFeaturedProjects(res.data.projects))
    }
    return res;
  }
}

export const getProjectsByCategory = (category) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/search_by_category?category=${category}`, {
      method: "get"
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

export const getProjectsByPledge = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/projects_by_pledge?id=${id}`, {
      method: "get",
    })

    res.data = await res.json();
    if (res.ok) {
      dispatch(loadProjectsByPledge(res.data.projects))
    }
    return res;
  }
}

export const getProjectsByTitle = (title) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/projects_by_title?title=${title}`, {
      method: 'get',
    })

    res.data = await res.json();
    if (res.ok) {
      dispatch(loadProjectsByTitle(res.data.projects))
    }
    return res;
  }
}

export default function projectsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PROJECT:
      return { ...state, project: action.project };
    case GET_PROJECTS_BY_CATEGORY:
      return { ...state, projects: action.projects };
    case GET_PROJECTS_BY_OWNER:
      return { ...state, projectsOwner: action.projects }
    case GET_PROJECTS_BY_PLEDGE:
      return { ...state, projectsPledge: action.projects }
    case GET_PROJECTS_BY_TITLE:
      return { ...state, projectsTitle: action.projects }
    case GET_FEATURED_PROJECTS:
      return { ...state, projects: action.projects}
    default:
      return state;
  }
}
