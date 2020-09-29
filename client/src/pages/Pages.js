import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from '../components/Login'
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';



export default function Pages() {
  return (
    <>
       <Route exact path='/login' component={Login} />
    {//   <Route exact path='/signup' component={SignupPage} />
    }
    <Navbar />
    </>
  )
}