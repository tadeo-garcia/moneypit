import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../components/Login'
import StartProject from './StartProject'
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';
// import { Route } from 'react-router-dom';
import Auth from '../components/Auth'



export default function Pages() {
  return (
    <>
       <Route exact path='/login' component={Login} />
       <Route exact path='/start' component={StartProject} />
    {//   <Route exact path='/signup' component={SignupPage} />
    }
    <Navbar />
      <Auth />
    </>
  )
}
