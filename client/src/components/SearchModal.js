import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsByTitle } from '../store/project';


function SearchModal({ searchTerm }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsByTitle(searchTerm))
  }, [searchTerm])

  const projects_title = useSelector(state => state.projects.projectsTitle)
  const stateNow = useSelector(state => state)

  // console.log(projects_title)
  // console.log("~~~~~~~~~~")
  // console.log(stateNow)

  return (
    <div id='search_modal'>
      <div className="search_modal__container">
        {/* {projects_title.map((project) => {
        return (
          <div id='projects-div'>
            `${project.title}`
            </div>
        )
      })} */}
        <button id='close-search-button' >
          X
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
