import React from 'react';
import { useSelector } from 'react-redux';
import { categoriesByID } from '../store/project'

export default function Profile() {
    const user = useSelector((state) => state.auth);
    const projectsPledged = useSelector((state) => state.projects.projectsOwner)
    const projectsOwned = useSelector((state) => state.projects.projectsPledged)

    if(!projectsPledged || !projectsOwned) return null

    return (
        <>
        {console.log(projectsPledged.length)}
        </>
    )
}