import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import Explorer from './Explorer'
import SearchBar from './Search'
import UserModal from './UserModal'

function Navbar() {
  const [displayExplorer, setDisplayExplorer] = useState(null)
  const [displaySearch, setDisplaySearch] = useState(null)
  const [displayUserModal, setDisplayUserModal] = useState(null)
  const currentUserId = useSelector(state => state.auth.id);


  const hideModal = (e) => {
    e.stopPropagation();
    setDisplayExplorer(null);
    setDisplaySearch(null)
    setDisplayUserModal(null)
  }

  const showSearchModal = () => {
    setDisplaySearch(<SearchBar hideModal={hideModal} />);
  }

  const showExplorerModal = () => {
    setDisplayExplorer(<Explorer hideModal={hideModal} />);
  }

  const showUserModal = () => {
    setDisplayUserModal(<UserModal hideModal={hideModal} />)
  }


  return (
    <div id='modal-navbar-div'>
      <div id='left-nav-div'>
        <div id='explorer-div' onClick={e => showExplorerModal()} >
          <span id="nav-links">Explorer</span>
          {displayExplorer}
        </div>
        <div id='start-project-div'>
          <NavLink exact to="/start" id="nav-links">Start a Project </NavLink>
        </div>

      </div>

      <div id='mid-nav-div'>
        <NavLink exact to="/">
          <div id='logo-div'></div>
        </NavLink>
      </div>

      <div id='right-nav-div'>
        <div id='search-div' onClick={e => showSearchModal()} >
          <span id="nav-links">Search<i className='fa fa-search fa-sm' /></span>
          {displaySearch}
        </div>
        {currentUserId ?
          <div id='avatar-div'
            onClick={e=>showUserModal()} >
            {displayUserModal}
          </div>
          :
          <div id='login-link'>
            <NavLink exact to="/login" id="nav-links">Log in</NavLink>
          </div>
        }
      </div>

    </div>
  )
};

export default Navbar;
