import React from 'react';
import Category from '../components/Category';
import Navbar from '../components/Navbar'
import Auth from '../components/Auth'
import Project from './Project'
import { Route } from 'react-router-dom';
import HomePage from './HomePage'



// <Navbar />
// <Auth />

export default function Pages() {
  return (
    <>
    <Route path="/category" component={Category} />
    <Route exact path="/" component={HomePage} />
    <Route path="/project" component={Project} />
    </>
  )
}