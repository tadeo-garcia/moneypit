import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../css/projectsmall.css';

export default function ProjectSmall(props) {
    const history = useHistory();

    function searchID(e) {
        e.preventDefault()
        let id = e.target.id.trim()
        history.push(`/project/${id}`)
    }

    return (
        <div id={props.project.id} className="listing-size" onClick={searchID} >
            <Link id={props.project.id} style={{ textDecoration: "none", color: "black" }} onClick={searchID} to={`project/${props.project.id}`}>
                <div id={props.project.id} className="listing">
                    <img id={props.project.id} src={props.project.pic} onClick={searchID} alt={props.project.description} />
                    <div id={props.project.id} className="listing-information">
                        <div id={props.project.id} className="listing-information-header">
                            <h3 id={props.project.id} >{props.project.title}</h3>
                            <h2 id={props.project.id} >{props.project.name}</h2>
                        </div>
                        <div id={props.project.id} className="spacer-div"></div>
                        <h3 id={props.project.id}>{props.project.total_funding > 0 ? Math.floor(props.project.funding_goal / props.project.total_funding) : 0.00}% funded</h3>
                        <div id={props.project.id} className="listing-information-body">
                            <h3 id={props.project.id}>By {props.project.organization}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
