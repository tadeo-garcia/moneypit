const SET_USER = 'auth/SET_USER';
const LOGOUT_USER = 'auth/LOGOUT_USER';

export const setUser = (user) => {
  if(!user){
    return {
      type: SET_USER,
      user: {}
    }
  }
  return {
    type: SET_USER,
    user
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
    res.data = await res.json();
    if (res.ok) { 
      dispatch(setUser(res.data.user))
    }
    return res;
  }
}

export const signup = (username, email, password) => {
  return async dispatch => {
    const res = await fetch('/api/users/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password })
    })
    res.data = await res.json();
    if (res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  }
}



export const logout = () => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'delete',
      headers: { },
    })
    if (res.ok) {
      dispatch(logoutUser());
    }
    return res;
  }
}

export default function authReducer(state = {}, action) {
  // Object.freeze(state)
  switch (action.type) {
    case SET_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
