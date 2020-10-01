import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';

export default function ProjectCard(props) {
    // const history = useHistory();
    // const dispatch = useDispatch();
    console.log(props.reward)
    return (
        <div className="reward-outer">
            <div className="info-card">
                Pledge ${props.reward.minimum_donation} or more
                {props.reward.title}
                {props.reward.description}
            </div>
            <div className="delivery-card">
            Estimated Delivery
            {props.reward.delivery_date}
            {props.reward.reward_count} backers
            </div>
        </div>
    )
}