import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth'
import '../css/navbar.css';
import { getProjectsByOwner, getProject, getProjectsByPledge } from '../store/project'

export default function UserModal({ hideModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);

  
  useEffect(() =>{
    dispatch(getProjectsByPledge(currentUserId))
    dispatch(getProjectsByOwner(currentUserId))
},)

const projects_owned = useSelector(state => state.projects.projectsOwner)
const projects_pledged = useSelector(state => state.projects.projectsPledge)


  const handleClick = e => {
    e.preventDefault();
    dispatch(logout())
    history.push('/')
  }
  if(!projects_owned || !projects_pledged){
    return null
  }

  function searchID(e) {
    e.preventDefault()
    let id = e.target.id.trim()
    dispatch(getProject(id))
    history.push(`/project/${id}`)
  }


  return (
    <div>
      <div id="user-modal">
        <div id='user-modal-top'>
          <div id='user-column'>
            <h3>Your account</h3>
            <Link to='/saved-projects'>Project 1</Link>
            <Link to='/saved-projects'>Project 2</Link>
            <Link to='/saved-projects'>Project 3</Link>
          </div>
          <div id='user-column'>
            <h3>Backed Projects</h3>
            <div>backed project component</div>
            {projects_pledged.map((project,index)=>{
              let link = `/projects/${project.id}`
              return (
                <div id= 'category-div'>
                  <a href={link} id={project.id} key={project.id} onClick={searchID}> {project.title}</a>
                </div>
              )
            })}
          </div>
          <div id='user-column'>
            <h3>Created Projects</h3>
            {projects_owned.map((project,index)=>{
              let link = `/projects/${project.id}`
              return (
                <div id= 'category-div'>
                  <a href={link} id={project.id} key={project.id} onClick={searchID}> {project.title}</a>
                </div>
              )
            })}
            <div>backed project component</div>
            <button id="new-project-button">+ New</button>
          </div>
        </div>
        <div id='user-modal-logout'>
          <span id='logout-span' onClick={handleClick}>Log out</span>
          <button onClick={hideModal} id='close-modal-button' >
            X
          </button>
        </div>
      </div>
    </div>
  )
}