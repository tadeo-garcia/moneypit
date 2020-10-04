const GET_CATEGORIES = 'categories/all';
const GET_CATEGORIES_BY_ID = '/categories/get_by_id';

export const loadCategories = (categories) => { 
    return {
        type: GET_CATEGORIES,
        categories: categories
    }
}

export const loadCategoriesById = (categories) => {
  return {
    type: GET_CATEGORIES_BY_ID,
    categories: categories
  }
}


export const getCategories = () => {
    return async dispatch => {
        const res = await fetch('/api/projects/categories', {
        method: "get"
      })
    res.data = await res.json()
    if(res.ok){
      dispatch(loadCategories(res.data.categories))
    }
    return res;
  }
}

export const getCategoriesById = (id) => {
  return async dispatch => {
    const res = await fetch(`/api/projects/category_by_id?id=${id}`,{
    method: "get"
  })
  res.data = await res.json();
  if (res.ok) {
    dispatch(loadCategoriesById(res.data.categories))
  }
  return res
}
}


export default function categoriesReducer(state={}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, list: action.categories};
        case GET_CATEGORIES_BY_ID:
            return {...state, categoriesById: action.categories}
        default:
            return state;
    }
}