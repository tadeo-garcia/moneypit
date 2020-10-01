import React from 'react';
import '../css/reward.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useHistory } from 'react-router-dom';

export default function ProjectCard(props) {
    // const history = useHistory();
    // const dispatch = useDispatch();
    console.log(props.reward)
    return (
        <div className="pledge_info">
            <div className="pledge_amount">
                <h2>Pledge ${props.reward.minimum_donation} or more</h2>
            </div>
            <div className="pledge_title">
                {props.reward.title}
                </div>
            <div className="pledge_reward">
                <p>{props.reward.description} </p>
            </div>
            <div className="delivery-card">
            Estimated Delivery
            {props.reward.delivery_date}
            <span>{props.reward.reward_count} backers </span>
            </div>
        </div>
    )
}