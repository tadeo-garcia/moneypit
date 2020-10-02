import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsByTitle } from '../store/project';
import '../css/searchmodal.css'
import ProjectSmall from './ProjectSmall';

function SearchModal({ searchTerm }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsByTitle(searchTerm))
  }, [searchTerm])

  const projects = useSelector(state => state.projects)

  const notLoaded = projects.projectsTitle && searchTerm.length > 0;

  if (!notLoaded) return null;

  console.log(projects.projectsTitle.length)

  return (
    <div className='search_modal'>
      <div className="search_modal__container">
        <div className='projects-label'>Projects</div>
        {/* { (!notLoaded) ? <div id='no-search-results'>No results matching your search.</div> : projects.projectsTitle.map((project) => <ProjectSmall project={project} key={project.id} />) */}
        {
          (projects.projectsTitle.length > 0) ? projects.projectsTitle.map((project) => <ProjectSmall project={project} key={project.id} />) : <div id='no-search-results'>Oi! We couldn't find any results.</div>
        }
      </div>
    </div>
  );
};

export default SearchModal;
