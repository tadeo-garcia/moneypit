import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Project() {
    const history = useHistory();
    const dispatch = useDispatch();
    const project = useSelector(state => state.projects.project)
    if(!project) return 'Loading...'

    return (
        <div>
        <h1>{project.description}</h1>
        <h1>{project.location}</h1>
        <h1>{project.organization}</h1>
        <h1>{project.funding_goal}</h1>
        <h1>{project.id}</h1>
        </div>
    )
}