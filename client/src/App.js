import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './components/Login'

import UserList from './components/UsersList';


function App() {
    // const needSignIn = useSelector(state => !state.authentication.token);

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users">
                <UserList />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route path="/">
                <h1>My Home Page</h1>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
