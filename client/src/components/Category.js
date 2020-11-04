import React, {useEffect} from 'react';
import ProjectCard from './ProjectCard';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer'
import '../css/projectcard.css';
import { useParams } from 'react-router-dom';
import { getProjectsByCategory} from '../store/project';



export default function Category() {
  const projects_list = useSelector(state => state.projects)
  const { category } = useParams();
  const notLoaded = projects_list.projects && projects_list.projects.length > 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsByCategory(category));
  }, [category]);

  if (!notLoaded) return 'Loading...'

  return (
    <>
      <div className="container-wrapper">
        <div className="card-container flex-wrap">
          {projects_list.projects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}
