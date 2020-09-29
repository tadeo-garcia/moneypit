const GET_CATEGORIES = 'categories/all';

export const loadCategories = (categories) => { 
    return {
        type: GET_CATEGORIES,
        categories: categories
    }
}

export const getCategories = () => {
  console.log('inside getCategories')
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


export default function categoriesReducer(state={}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, list: action.categories};
        default:
            return state;
    }
}