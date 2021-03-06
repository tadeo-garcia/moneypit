import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../css/projectsmall.css';

export default function ProjectCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function searchID(e) {
    e.preventDefault()
    let id = e.target.id.trim()
    history.push(`/project/${id}`)
  }
if(!props.project) return null

let percentage = Math.floor(props.project.total_funding / props.project.funding_goal * 100)
let percentage2 = percentage
if (percentage > 100) {
    percentage2 = 100;
  }

const progStyle = { width: `${percentage2}%` };


  return (
    <div id={props.project.id} className="card-wrapper">
      <div className="card">
        <Link id={props.project.id} 
        className="card-link"
        style={{ textDecoration: "none", color: "black" }} 
        onClick={searchID} 
        to={`project/${props.project.id}`}>
          <img id={props.project.id} 
          src={props.project.pic} 
          alt='Project' onClick={searchID} />
        </Link>
          <div className="card-information">
            <div className="card-header">
              <h3>{props.project.title}</h3>
              <h2>{props.project.description}</h2>
              <h3>By {props.project.organization}</h3>
            </div>
            <div className="card-footer">
              <div id='projectpage-detail-progress'>
                <div id='progress-container'>
                  <div id='progress-container-fill' style={progStyle} />
                </div>
              </div>
              <h4 id='pledged'>${props.project.total_funding} pledged</h4>
              <h4>{percentage}% funded</h4>
              <h4>{props.project.days_remaining} days to go</h4>
            </div>
          </div>
        </div>
     
    </div>
  )
}
