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
  const stateNow = useSelector(state => state)

  // const notLoaded = projects.projectsTitle && projects.projectsTitle.length > 0;
  const notLoaded = projects.projectsTitle && searchTerm.length > 0;

  if (!notLoaded) return null;


  console.log(projects)
  console.log("~~~~~~~~~~")
  // console.log(stateNow)

  return (
    <div className='search_modal'>
      <div className="search_modal__container">
        {/* { (!notLoaded) ? <div id='no-search-results'>No results matching your search.</div> : projects.projectsTitle.map((project) => <ProjectSmall project={project} key={project.id} />) */}
        <div className='projects-label'>Projects</div>
        {
          projects.projectsTitle.map((project) => <ProjectSmall project={project} key={project.id} />)
        }
        {/* <button id='close-search-button' >
          X
        </button> */}
      </div>
    </div>
  );
};

export default SearchModal;
