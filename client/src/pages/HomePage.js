import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/category'
import { getProject, getProjectsByCategory } from '../store/project';
import '../css/homepage.css'
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    dispatch(getProjectsByCategory("Robots"))
    dispatch(getCategories())
  }, [dispatch])

  function searchCategory(e) {
    e.preventDefault()
    let category = e.target.innerHTML.trim()
    dispatch(getProjectsByCategory(category))
    history.push(`/category/${category}`)
  }

  function searchID(e) {
    e.preventDefault()
    let id = e.target.id.trim()
    dispatch(getProject(id))
    history.push(`/project/${id}`)
  }
  
  const projects = useSelector(state => state.projects.projects)
  const category_list = useSelector(state => state.categories.list)
  const notLoaded = projects && category_list
  if (!notLoaded) return null;
  let len = projects.length
  let num1 = Math.floor(Math.random() * len)
  let num2 = Math.floor(Math.random() * len)
  let num3 = Math.floor(Math.random() * len)
  while(num1 === num2 || num2 === num3) num2 = Math.floor(Math.random() * len)
  while(num1 === num3 || num2 === num3) num3 = Math.floor(Math.random() * len)
  return (
    <>
      <div className='homeBody'>
        <div className='bodyBox'>
          <div className='subbarWrapper'>
            <div className='subbar__categories'>
              {category_list.map((category,index)=>{
                  let link = `/projects/${category.title}`
                  return (
                    <div  key={index}>
                      <a href={link} key={index} onClick={searchCategory} className='subbar__categoriesList'> {category.title}</a>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='homeHeader'>
            <div className='homeHeader__leftside'>
                <p id='featuredLabel'>FEATURED PROJECT</p>
                <img className='homeHeader__imgLg' id={projects[4].id} onClick={searchID} src={projects[4].pic} alt='Featured Project'></img>
                <p id='featuredTitle'>
                {projects[4].title}
                </p>
                <p id='featuredDes'>
                  {projects[4].description}
                </p>
            </div>
            <div className='homeHeader__rightside'>
              <p id='featuredLabel'>RECOMMENDED FOR YOU</p>
              <div id='topSmallBox' className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' id={projects[num1].id} onClick={searchID} src={projects[num1].pic} alt='Recommended Project 1'></img>
                <div>
                  <p className='homeHeader__tittle'>{projects[num1].title}</p>
                  <p className='homeHeader__funded'>{projects[num1].total_funding}% funded</p>
                  <p className='homeHeader__madeBy'>By {projects[num1].organization}</p>
                </div>
              </div>
              <div className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' id={projects[num2].id} onClick={searchID} src={projects[num2].pic} alt='Recommended Project 2'></img>
                <div>
                  <p className='homeHeader__tittle'>{projects[num2].title}</p>
                  <p className='homeHeader__funded'>{projects[num2].total_funding}% funded</p>
                  <p className='homeHeader__madeBy'>By {projects[num2].organization}</p>
                </div>
              </div>
              <div className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' id={projects[num3].id} onClick={searchID} src={projects[num3].pic} alt='Recommended Project 3'></img>
                <div>
                  <p className='homeHeader__tittle'>{projects[num3].title}</p>
                  <p className='homeHeader__funded'>{projects[num3].total_funding}% funded</p>
                  <p className='homeHeader__madeBy'>By {projects[num3].organization}</p>
                </div>
              </div>           
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}
