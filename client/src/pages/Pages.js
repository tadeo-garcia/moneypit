import React from 'react';
import Category from '../components/Category';
import Navbar from '../components/Navbar'
import Auth from '../components/Auth'
import Project from './Project'
import { Route } from 'react-router-dom';
import HomePage from './HomePage'
import StartProject from '../components/StartProject';
import Profile from './Profile'




export default function Pages() {
  return (
    <>
      <Navbar />
      <Route path="/category" component={Category} />
      <Route exact path="/" component={HomePage} />
      <Route path="/project" component={Project} />
      <Route path='/start' component={StartProject} />
      <Route exact path="/profile" component={Profile} />
      <Auth />
    </>
  )
}
