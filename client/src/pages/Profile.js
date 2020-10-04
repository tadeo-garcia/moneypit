import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesById } from '../store/category';
import { getProjectsByOwner, getProjectsByPledge} from '../store/project';
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCardSmall'
import '../css/profile.css';


export default function Profile() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [displayUserOwned, setDisplayUserOwned] = useState(null)
  const [displayUserPledged, setDisplayUserPledged] = useState(null)
  const projectsOwned = useSelector((state) => state.projects.projectsOwner)
  const projectsPledged = useSelector((state) => state.projects.projectsPledge)
  const categories = useSelector((state) => state.categories.categoriesById)
  let displayModal = []
  
  useEffect(() =>{
    dispatch(getCategoriesById(user.id))
    dispatch(getProjectsByOwner(user.id))
    dispatch(getProjectsByPledge(user.id))
    if(!projectsPledged){
      return
    }
    let displayModal = mapProps(projectsPledged)
    setDisplayUserPledged(displayModal)
  }, [dispatch])
  
  if(!projectsPledged || !categories || !projectsOwned || 
    displayModal===[]) return null
  
  function mapProps(array) {
    return array.map((project) => <ProjectCard project={project} key={project.id}/>)
  }

  const showCreated = (e) => {
      e.stopPropagation()
      setDisplayUserPledged(null)
      setDisplayUserOwned(mapProps(projectsOwned))
    }
    
  const showBacked = (e) => {
      e.stopPropagation()
      setDisplayUserOwned(null)
      setDisplayUserPledged(mapProps(projectsPledged))
  }

  return (
    <>
      <div id='profile-page-container'>
        <div id='profile-page-top'>
          <div id='profile-avatar'>
          </div>
          <div id='profile-details'>
            <span id='user-name'>{user.username}</span>
            <br/>
            <span id='user-details'>Backed {projectsPledged.length} projects • Joined {user.created_at}</span>
          </div>
        </div>
        <div id='profile-page-middle'>
          <div id='profile-navbar'>
                <div className="active-display">
                  <span id='profile-navbar-link' onClick={showBacked}> Backed</span>
                  <span id='link-number'>{projectsPledged.length}</span>
                </div>
                <div  className="active-display">
                  <span id='profile-navbar-link' onClick={showCreated} >Created</span>
                  <span id='link-number'>{projectsOwned.length}</span>
              </div>
          </div>
          <div id='profile-display'>
            <div className="card-container-profile flex-wrap">
              {displayUserOwned} 
              {displayUserPledged}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

