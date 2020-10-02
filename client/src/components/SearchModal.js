import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsByTitle, getProject } from '../store/project';
import { useHistory } from "react-router-dom";
import '../css/searchmodal.css'
import ProjectSmall from './ProjectSmall';

function SearchModal({ searchTerm, hideModal }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsByTitle(searchTerm))
  }, [dispatch, searchTerm])

  const projects = useSelector(state => state.projects)

  const notLoaded = projects.projectsTitle && searchTerm.length > 0;

  const handleSubmit = async (e) => {
    dispatch(getProject(e))
    hideModal(e)
    useHistory.push(`/project/${e}`)
  }

  if (!notLoaded) return null;

  return (
    <div className='search_modal'>
      <div className="search_modal__container">
        <div className='projects-label'>Projects</div>
        {
          (projects.projectsTitle.length > 0) ? projects.projectsTitle.map((project) => <ProjectSmall oncClick={e => handleSubmit(project.id)} project={project} key={project.id} />) : <div id='no-search-results'>Oi! We couldn't find any results.</div>
        }
      </div>
    </div>
  );
};

export default SearchModal;
