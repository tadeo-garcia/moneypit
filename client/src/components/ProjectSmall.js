import React from 'react';
import { getProject } from '../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export default function ProjectSmall (props) {
    const history = useHistory();
    const dispatch = useDispatch();

    function searchID(e) {
        e.preventDefault()
        let id = e.target.innerHTML.trim()
        dispatch(getProject(id))
        history.push(`/project/${id}`)
      }

    return (
    <div>
        <h1>{props.project.description}</h1>
        <a href={"doesn't matter"} onClick={searchID}> {props.project.id}</a>
    </div>
    )
}