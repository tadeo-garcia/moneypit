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
    console.log(res)
    if(res.ok){
      console.log(res)
      console.log("~~~")
      console.log(res.data)
      console.log("~~~")
      console.log(res.data.categories)
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