import React, { Component } from 'react';
import ProjectSmall from './ProjectSmall';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



export default function Category() {
    const history = useHistory();
    const dispatch = useDispatch();

    const projects_list = useSelector(state => state.projects)
    console.log(projects_list)
    console.log(store)
    const notLoaded = projects_list !== undefined && projects_list.length > 0;
    if(!notLoaded) return 'Loading...'

        return (
                <div className="categories-container">
                    <div className="category_project">
                        {projects_list.map((project) => <ProjectSmall project={project} key={project.id} />)}
                    </div>
                </div>
            )
    }