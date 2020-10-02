import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth'
import '../css/usermodal.css'
import { getProjectsByOwner, getProject, getProjectsByPledge } from '../store/project'

export default function UserModal({ hideModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);

  
  useEffect(() =>{
    dispatch(getProjectsByPledge(currentUserId))
    dispatch(getProjectsByOwner(currentUserId))
},[dispatch])



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
      <div onClick={hideModal} id='hide-modal'></div>
      <div id="user-modal">
        <div id='user-modal-top'>
          <div className='user-column1'>
            <h3 id='usermodal__header'>YOUR ACCOUNT</h3>
            <Link to='/profile' id='user-modal__link'>Profile</Link>
            <Link to='/settings' id='user-modal__link'>Settings</Link>
            <Link to='/messages' id='user-modal__link'>Messages</Link>
          </div>
          <div className='user-column2'>
            <div><h3 id='usermodal__header'>BACKED PROJECTS</h3></div>
            {projects_pledged.map((project,index)=>{
              let link = `/projects/${project.id}`
              return (
                <div id= 'usermodal__project'>
                  <div>
                    <img src={project.pic} id='backed-modal-pic' alt='project' />
                  </div>
                  <div>
                    <a href={link} id={project.id} 
                    key={project.id} onClick={searchID}
                    id="usermodal__project-link">
                    {project.title}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='user-column3'>
            <div><h3 id='usermodal__header'>CREATED PROJECTS</h3></div>
            <div class='scroll'>
              {projects_owned.map((project,index)=>{
                let link = `/projects/${project.id}`
                return (
                  <div id= 'usermodal__project'>
                    <img src={project.pic} id='backed-modal-pic' alt='project'/>
                    <a href={link} id={project.id} 
                    key={project.id} onClick={searchID}
                    id='user-modal__link'> 
                    {project.title}
                    </a>
                  </div>
                )
              })}
            </div>
            <div id='user-modal__button'>
              <button id="new-project-button"> +  New</button>
            </div>
          </div>
        </div>
        <div id='user-modal-bottom'>
          <span id='logout-span' onClick={handleClick}>Log out</span>
          <button onClick={hideModal} id='close-modal-button' >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

