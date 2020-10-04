const GET_PROJECT = 'project/single';
const GET_PROJECTS_BY_CATEGORY = 'project/get_by_category';
const GET_PROJECTS_BY_CATEGORY2 = 'project/get_by_category2';
const GET_PROJECTS_BY_OWNER = 'project/get_by_owner';
const GET_PROJECTS_BY_PLEDGE = 'project/get_by_pledge';
const GET_PROJECTS_BY_TITLE = '/project/get_by_title';
const GET_FEATURED_PROJECTS = 'project/get_featured';
const GET_PROJECTS_BY_OWNER_AND_CATEGORY = 'project/get_by_id_and_category';

export const loadProjectsByOwner = (projects) => {
  return {
    type: GET_PROJECTS_BY_OWNER,
    projects: projects
  }
}

export const loadProjectsByOwnerAndCategory = (projects) => {
  return {
    type: GET_PROJECTS_BY_OWNER_AND_CATEGORY,
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

export const loadProjectsByCategory2 = (projects) => {
  return {
    type: GET_PROJECTS_BY_CATEGORY2,
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

export const sendPledge = (pledgeAmount, userId, projectId, rewardId) => {
  return async dispatch => {
    const res = await fetch('/api/projects/submit_pledge', {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pledgeAmount, userId, projectId, rewardId })
    },
    )
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

export const getProjectsByCategory2 = (category) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/search_by_category?category=${category}`, {
      method: "get"
    })

    res.data = await res.json();
    if (res.ok) {
      dispatch(loadProjectsByCategory2(res.data.projects))
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

export const getProjectsByOwnerAndCategory = (id, category) => {
  return async dispatch => {
    const res = await fetch (`/api/projects/projects_by_category_and_id?id=${id}&category=${category}`, {
      method: "get",
    })
    console.log("~~~~~~")
    res.data = await res.json();
    console.log(res.data)
    if(res.ok) {
      dispatch(loadProjectsByOwnerAndCategory(res.data.projects))
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
    case GET_PROJECTS_BY_CATEGORY2:
      return { ...state, projects2: action.projects };
    case GET_PROJECTS_BY_OWNER:
      return { ...state, projectsOwner: action.projects }
    case GET_PROJECTS_BY_PLEDGE:
      return { ...state, projectsPledge: action.projects }
    case GET_PROJECTS_BY_TITLE:
      return { ...state, projectsTitle: action.projects }
    case GET_FEATURED_PROJECTS:
      return { ...state, featuredProjects: action.projects}
    case GET_PROJECTS_BY_OWNER_AND_CATEGORY:
      return {...state, projectsPledge: action.projects}
    default:
      return state;
  }
}
