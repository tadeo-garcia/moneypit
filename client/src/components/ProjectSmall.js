import React from 'react';
import { getProject } from '../store/project';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../css/projectsmall.css';

export default function ProjectSmall(props) {
    const history = useHistory();
    const dispatch = useDispatch();

    function searchID(e) {
        e.preventDefault()
        let id = e.target.id.trim()
        dispatch(getProject(id))
        history.push(`/project/${id}`)
    }

    return (
        <div id={props.project.id} className="listing-size" onClick={searchID} >
            <Link id={props.project.id} style={{ textDecoration: "none", color: "black" }} onClick={searchID} to={`project/${props.project.id}`}>
                <div onClick={props.hideModal} id={props.project.id} className="listing">
                    <img id={props.project.id} src={props.project.pic} onClick={searchID} alt={props.project.description} />
                    <div id={props.project.id} className="listing-information">
                        <div id={props.project.id} className="listing-information-header">
                            <h3 onClick={searchID} id={props.project.id} >{props.project.title}</h3>
                            <h2 id={props.project.id} >{props.project.name}</h2>
                        </div>
                        <div className="spacer-div"></div>
                        <h3>{props.project.total_funding > 0 ? Math.floor(props.project.funding_goal / props.project.total_funding) : 0.00}% funded</h3>
                        <div className="listing-information-body">
                            <h3>By {props.project.organization}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
