import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth'
import '../css/navbar.css';

export default function UserModal({ hideModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  
  const handleClick = e => {
    e.preventDefault();
    dispatch(logout())
    history.push('/')
  }

  return (
    <div>
      <div id="user-modal">
        <div id='user-modal-top'>
          <div id='user-column'>
            <h3>Your account</h3>
            <Link to='/saved-projects'>Project 1</Link>
            <Link to='/saved-projects'>Project 2</Link>
            <Link to='/saved-projects'>Project 3</Link>
          </div>
          <div id='user-column'>
            <h3>Backed Projects</h3>
            <div>backed project component</div>
          </div>
          <div id='user-column'>
            <h3>Created Projects</h3>
            <div>backed project component</div>
            <button id="new-project-button">+ New</button>
          </div>
        </div>
        <div id='user-modal-logout'>
          <span id='logout-span' onClick={handleClick}>Log out</span>
          <button onClick={hideModal} id='close-modal-button' >
            X
          </button>
        </div>
      </div>
    </div>
  )
}