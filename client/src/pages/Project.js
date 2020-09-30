import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Project() {
    const history = useHistory();
    const dispatch = useDispatch();
    const project = useSelector(state => state.projects.project)
    console.log(project)
    if(!project) return 'Loading...'

    return (
        <h1>{project.description}</h1>
    )
}