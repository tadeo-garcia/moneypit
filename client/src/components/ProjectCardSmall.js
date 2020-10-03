import React from 'react';
import { getProject } from '../store/project';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../css/projectcardsmall.css';

export default function ProjectCardSmall(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function searchID(e) {
    e.preventDefault()
    let id = e.target.id.trim()
    dispatch(getProject(id))
    history.push(`/project/${id}`)
  }
  if (!props.project) return null
  let percentage = Math.floor(props.project.total_funding / props.project.funding_goal * 100)
  if (percentage > 100) {
    percentage = 100;
  }

  const progStyle = { width: `${percentage}%` };

  return (
    <div id={props.project.id} className="card-wrapper-small" onClick={searchID}>
      <Link id={props.project.id} style={{ textDecoration: "none", color: "black" }} onClick={searchID} to={`project/${props.project.id}`}>
        <div className="card-small-image">
          <img id={props.project.id} src={props.project.pic} alt='Project' onClick={searchID} />
          <div id='projectpage-detail-progress'>
            <div id='progress-container'>
              <div id='progress-container-fill' style={progStyle} />
            </div>
          </div>
          <div className="card-small-information">
            <div className="card-small-header">
              <span>{props.project.title}</span>
              <br/>
              <span>By {props.project.organization}</span>
            </div>
            <div className="card-small-footer">
              <span id='card-small-description'>${props.project.description}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

