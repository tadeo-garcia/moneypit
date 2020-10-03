import React from 'react';
import { getProject } from '../store/project';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../css/projectsmall.css';

export default function ProjectCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  function searchID(e) {
    e.preventDefault()
    let id = e.target.id.trim()
    dispatch(getProject(id))
    history.push(`/project/${id}`)
  }
if(!props.project) return null
let percentage = Math.floor(props.project.total_funding / props.project.funding_goal * 100)

  return (
    <div id={props.project.id} className="card-wrapper" onClick={searchID}>
      <Link id={props.project.id} style={{ textDecoration: "none", color: "black" }} onClick={searchID} to={`project/${props.project.id}`}>
        <div className="card">
          <img id={props.project.id} src={props.project.pic} alt='Project' onClick={searchID} />
          <div className="card-information">
            <div className="card-header">
              <h3>{props.project.title}</h3>
              <h2>{props.project.description}</h2>
              <h3>By {props.project.organization}</h3>
            </div>
            <div className="card-footer">
              <h4 id='pledged'>${props.project.total_funding} pledged</h4>
              <h4>{percentage}% funded</h4>
              <h4>{props.project.days_remaining} days to go</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
