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

    function commas(num) {
        num += '';
        var numArray = num.split('.');
        var x1 = numArray[0];
        var x2 = numArray.length > 1 ? '.' + numArray[1] : '';
        var regex = /(\d+)(\d{3})/;
        while (regex.test(x1)) {
            x1 = x1.replace(regex, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    return (
        <div onClick={props.hideModal} id={props.project.id} className="listing-size" >
            <Link onClick={searchID} id={props.project.id} style={{ textDecoration: "none", color: "black" }} to={`project/${props.project.id}`}>
                <div onClick={searchID} id={props.project.id} className="listing">
                    <img id={props.project.id} src={props.project.pic} alt={props.project.description} />
                    <div id={props.project.id} className="listing-information">
                        <div id={props.project.id} className="listing-information-header">
                            <h3 onClick={searchID} id={props.project.id} >{props.project.title}</h3>
                            <h2>{props.project.name}</h2>
                        </div>
                        <div className="spacer-div"></div>
                        <h3 id={props.project.id}>{props.project.total_funding > 0 ? commas(Math.floor((props.project.total_funding / props.project.funding_goal) * 100)) : 0.00}% funded</h3>
                        <div id={props.project.id} className="listing-information-body">
                            <h3 id={props.project.id}>By {props.project.organization}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
