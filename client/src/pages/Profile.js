import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesById } from '../store/category';
import { getProjectsByOwner, getProjectsByPledge} from '../store/project';
import Footer from '../components/Footer'
import ProjectCardSmall from '../components/ProjectCardSmall'
import ProjectCard from '../components/ProjectCardSmall'



export default function Profile() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(getCategoriesById(user.id))
    dispatch(getProjectsByOwner(user.id))
    dispatch(getProjectsByPledge(user.id))
  }, [dispatch])
  const projectsOwned = useSelector((state) => state.projects.projectsOwner)
  const categories = useSelector((state) => state.categories.categoriesById)
  const projectsPledged = useSelector((state) => state.projects.projectsPledge)
console.log(projectsOwned)
console.log(categories)
console.log(projectsPledged)
  
  if(!projectsPledged || !categories || !projectsOwned) return null

  return (
      <>
        <div id='profile-page-container'>
          < 
        </div>
        <Footer></Footer>
      </>
  )
}