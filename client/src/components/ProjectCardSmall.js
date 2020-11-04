import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll'
import '../css/projectcardsmall.css';

export default function ProjectCardSmall(props) {
  const history = useHistory();

  function searchID(e) {
    e.preventDefault()
    let id = e.target.id.trim()
    history.push(`/project/${id}`)
  }
  if (!props.project) return null
  let percentage = Math.floor(props.project.total_funding / props.project.funding_goal * 100)
  if (percentage > 100) {
    percentage = 100;
  }

  const progStyle = { width: `${percentage}%` };

  return (
    <div id={props.project.id} className="card-wrapper-small">
      <Scroll to='modal-navbar-div' smooth={true} duration={750}>
          <div className="card-small-image">
            <img id={props.project.id} src={props.project.pic} alt='Project' onClick={searchID} />
              <div id='projectpage-detail-progress'>
                <div id='progress-container'>
                  <div id='progress-container-fill' style={progStyle} />
                </div>
              </div>
          </div>
        </Scroll>
      <div className="card-small-information">
        <div className="card-small-header">
          <span>{props.project.title}</span>
          <br/>
          <span>By {props.project.organization}</span>
        </div>
        <div className="card-small-footer">
          <span id='card-small-description'>{props.project.description}</span>
        </div>
      </div>
    </div>
  )
}
