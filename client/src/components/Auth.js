import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup'



export default function Auth() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </>
  )
}
