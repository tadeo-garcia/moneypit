import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/category'
import { getProjectsByCategory, getFeaturedProjects, getProjectsByCategory2 } from '../store/project';
import '../css/homepage.css'
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom';

export default function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    dispatch(getProjectsByCategory('Apps'))
    dispatch(getProjectsByCategory2('Hardware'))
    dispatch(getFeaturedProjects())
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
    history.push(`/project/${id}`)
  }
  
  const projects = useSelector(state => state.projects.featuredProjects)
  const catList = useSelector(state => state.projects.projects)
  const catList2 = useSelector(state => state.projects.projects2)
  const category_list = useSelector(state => state.categories.list)
  const notLoaded = projects && category_list && catList
  if (!notLoaded) return null;
  let len = projects.length - 1
  let num1 = Math.floor(Math.random() * len) + 1 
  let num2 = Math.floor(Math.random() * len) + 1 
  let num3 = Math.floor(Math.random() * len) + 1 
  while(num1 === num2 || num2 === num3) num2 = Math.floor(Math.random() * len) + 1 
  while(num1 === num3 || num2 === num3) num3 = Math.floor(Math.random() * len) + 1 

  let percentage = Math.floor(projects[0].total_funding / projects[0].funding_goal * 100)
  if (percentage > 100) {
    percentage = 100;
  }

  const progStyle = { width: `${percentage}%` };



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
              <img className='homeHeader__imgLg' id={projects[0].id} onClick={searchID} src={projects[0].pic} alt='Featured Project'></img>
              <div id='homePageProgess'>
                <div id='progress-container'>
                  <div id='progress-container-fill' style={progStyle} />
                </div>
              </div>
              <p id='featuredTitle'>
              {projects[0].title}
              </p>
              <p id='featuredDes'>
                {projects[0].description}
              </p>
              <p id='featuredBy'>By {projects[0].organization}</p>
            </div>
            <div className='homeHeader__rightside'>
              <p id='featuredLabel'>RECOMMENDED FOR YOU</p>
              <div id='topSmallBox' className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' id={projects[num1].id} onClick={searchID} src={projects[num1].pic} alt='Recommended Project 1'></img>
                <div>
                  <p className='homeHeader__tittle'>{projects[num1].title}</p>
                  <p className='homeHeader__funded'>{Math.floor(projects[num1].total_funding / projects[num1].funding_goal * 100)}% funded</p>
                  <p className='homeHeader__madeBy'>By {projects[num1].organization}</p>
                </div>
              </div>
              <div className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' id={projects[num2].id} onClick={searchID} src={projects[num2].pic} alt='Recommended Project 2'></img>
                <div>
                  <p className='homeHeader__tittle'>{projects[num2].title}</p>
                  <p className='homeHeader__funded'>{Math.floor(projects[num2].total_funding / projects[num2].funding_goal * 100)}% funded</p>
                  <p className='homeHeader__madeBy'>By {projects[num2].organization}</p>
                </div>
              </div>
              <div className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' id={projects[num3].id} onClick={searchID} src={projects[num3].pic} alt='Recommended Project 3'></img>
                <div>
                  <p className='homeHeader__tittle'>{projects[num3].title}</p>
                  <p className='homeHeader__funded'>{Math.floor(projects[num3].total_funding / projects[num3].total_funding * 100)}% funded</p>
                  <p className='homeHeader__madeBy'>By {projects[num3].organization}</p>
                </div>
              </div>           
            </div>
          </div>
          <div id='listLabel'>Apps</div>
            <div className='body'>
              {catList.map((projectBody,index)=>{
                let percentage2 = Math.floor(projectBody.total_funding / projectBody.funding_goal * 100)
                if (percentage2 > 100) {
                  percentage2 = 100;
                }
              
                const progStyle2 = { width: `${percentage2}%` };
                return (
                  <div key={index} className='body__list'>
                        <img className='body__img' id={projectBody.id} onClick={searchID} src={projectBody.pic} alt='Featured Project'></img>
                        <div id='projectpage-detail-progress'>
                        <div id='progress-container'>
                          <div id='progress-container-fill'  style={progStyle2} />
                          </div>
                        </div>
                        <p id='bodyTitle'>
                        {projectBody.title}
                        </p>
                        <p id='bodyDes'>
                          {projectBody.description}
                        </p>
                        <p id='bodyBy'>By {projectBody.organization}</p>
                    </div>
                  )
                })
              }
            </div>
            <div id='listLabel'>Hardware</div>
            <div className='body'>
              {catList2.map((projectBody2,index)=>{
                let percentage2 = Math.floor(projectBody2.total_funding / projectBody2.funding_goal * 100)
                if (percentage2 > 100) {
                  percentage2 = 100;
                }
              
                const progStyle2 = { width: `${percentage2}%` };
                return (
                  <div key={index} className='body__list'>
                        <img className='body__img' id={projectBody2.id} onClick={searchID} src={projectBody2.pic} alt='Featured Project'></img>
                        <div id='projectpage-detail-progress'>
                        <div id='progress-container'>
                          <div id='progress-container-fill'  style={progStyle2} />
                          </div>
                        </div>
                        <p id='bodyTitle'>
                        {projectBody2.title}
                        </p>
                        <p id='bodyDes'>
                          {projectBody2.description}
                        </p>
                        <p id='bodyBy'>By {projectBody2.organization}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}
