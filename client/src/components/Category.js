import React from 'react';
import ProjectCard from './ProjectCard';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/projectcard.css';



export default function Category() {
  const history = useHistory();
  const dispatch = useDispatch();
  const projects_list = useSelector(state => state.projects)

  const notLoaded = projects_list.projects && projects_list.projects.length > 0;
  
  if(!notLoaded) return 'Loading...'

  return (
    <div className="container-wrapper">
      <div className="card-container">
          {projects_list.projects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
    </div>
  )
}