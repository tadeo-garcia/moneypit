import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSmall = (props) => {
    return (
    <h1>{props.project.description}</h1>
    )
}

export default ProjectSmall