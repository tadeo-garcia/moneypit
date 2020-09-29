import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';
const LOGOUT_USER = 'auth/LOGOUT_USER';

export const setUser = (user) => {
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

export const login = (username, password) => {
  return async dispatch => {
    const res = await fetch('/api/session', {
      method: 'put',
      headers: {
        "Content-Type": "application/json",
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      },
      body: JSON.stringify({ username, password })
    })
    res.data = await res.json(); // {user with the scope of currentUser}
    if (res.ok) {
      dispatch(setUser(res.data.user))
    }
    return res;
  }
}

export const signup = (username, password, passwordConfirm) => {
  return async dispatch => {
    const res = await fetch('/api/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      },
      body: JSON.stringify({ username, password, passwordConfirm })
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
      headers: {
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      },
    })
    if (res.ok) {
      dispatch(logoutUser());
    }
    return res;
  }
}

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}