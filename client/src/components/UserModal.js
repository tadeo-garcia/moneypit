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
},[dispatch, currentUserId])

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
    hideModal(e)
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
            <div id='usermodal__header'>YOUR ACCOUNT</div>
            <Link to='/profile' className='user-modal__link'>Profile</Link>
            <Link to='/settings' className='user-modal__link'>Settings</Link>
            <Link to='/messages' className='user-modal__link'>Messages</Link>
          </div>
          <div className='user-column2'>
            <div id='usermodal__header'>BACKED PROJECTS</div>
            <div className='backed-projects-div' >
              {
                projects_pledged.map((project, index) => {
                  let link = `/projects/${project.id}`
                  return (
                    <div className='usermodal__project' id={project.id} key={project.id}>
                      <div>
                        <img src={project.pic} id='backed-modal-pic' alt='project' />
                      </div>
                      <div>
                        <a href={link} id={project.id}
                          key={project.id} onClick={searchID}
                          className="usermodal__project-link">
                          {project.title}
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='user-column3'>
            <div id='usermodal__header'>CREATED PROJECTS</div>
            <div className='created-projects-div'>
              {
                projects_owned.map((project, index) => {
                  let link = `/projects/${project.id}`
                  return (
                    <div className='usermodal__project' id={project.id} key={project.id}>
                      <div>
                        <img src={project.pic} id='backed-modal-pic' alt='project' />
                      </div>
                      <div>
                        <Link to={link} id={project.id}
                          key={project.id} onClick={searchID}
                          className='user-modal__link'>
                          {project.title}
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div id='user-modal__new-button'>
              <button id="new-project-button"> +  New</button>
            </div>
          </div>
        </div>
        <div id='user-modal-bottom'>
          <span id='logout-span' onClick={handleClick}>Log out</span>
          <i onClick={hideModal} class='fa fa-times close-modal-button'></i>
        </div>
      </div>
    </div>
  )
}
