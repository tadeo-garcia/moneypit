import React from 'react';
import { useSelector } from 'react-redux';
import Reward from '../components/Reward'

export default function Project() {
    const project = useSelector(state => state.projects.project)
    if(!project) return 'Loading...'

    return (
        <div>
        <h1>{project.description}</h1>
        <h1>{project.location}</h1>
        <h1>{project.organization}</h1>
        <h1>{project.id}</h1>
        <h1>{project.funding_goal}</h1>
        <h1>{project.total_funding}</h1>
        
            <div className="reward-container">
                {project.rewards.map((reward) => <Reward reward={reward} key={reward.id} />)}
            </div>
        </div>
    )
}