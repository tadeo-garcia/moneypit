import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesById } from '../store/category';
import { getProjectsByOwner, getProjectsByPledge} from '../store/project';
import Footer from '../components/Footer'
import ProjectCardSmall from '../components/ProjectCardSmall'
import ProjectCard from '../components/ProjectCardSmall'
import '../css/profile.css';


export default function Profile() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [displayUserDisplay, setDisplayUserDisplay] = useState(null)
  
  useEffect(() =>{
    dispatch(getCategoriesById(user.id))
    dispatch(getProjectsByOwner(user.id))
    dispatch(getProjectsByPledge(user.id))
  }, [dispatch])
  const projectsOwned = useSelector((state) => state.projects.projectsOwner)
  const projectsPledged = useSelector((state) => state.projects.projectsPledge)
  const categories = useSelector((state) => state.categories.categoriesById)
  function mapProps(array) {
    return array.map((project) => <ProjectCard project={project} key={project.id}/>)
  }
  
  if(!projectsPledged || !categories || !projectsOwned) return null
  const showCreated = () => {
    setDisplayUserDisplay(mapProps(projectsOwned))
  }

  const showBacked = () => {
      setDisplayUserDisplay(mapProps(projectsPledged))
  }

  console.log("RENDERING")

  return (
    <>
      <div id='profile-page-container'>
        <div id='profile-page-top'>
          <div id='profile-avatar'>
          </div>
          <div id='profile-details'>
            <span id='user-name'>{user.username}</span>
            <br/>
            <span id='user-details'>Backed {projectsOwned.length} projects • Joined {user.created_at}</span>
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
            <div className="card-container flex-wrap">
              {displayUserDisplay}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}