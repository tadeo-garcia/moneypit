import React from 'react';
import ProjectSmall from './ProjectSmall';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



export default function Category() {
    const history = useHistory();
    const dispatch = useDispatch();
    const projects_list = useSelector(state => state.projects)
    const notLoaded = projects_list.projects && projects_list.projects.length > 0;
    
    if(!notLoaded) return 'Loading...'

        return (
                <div className="categories-container">
                    <div className="category_project">
                        {projects_list.projects.map((project) => <ProjectSmall project={project} key={project.id} />)}
                    </div>
                </div>
            )
    }