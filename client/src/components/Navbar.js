import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/navbar.css';
import Explorer from './Explorer'
import SearchBar from './Search'

function Navbar() {
  const [displayExplorer, setDisplayExplorer] = useState(null)
  const [displaySearch, setDisplaySearch] = useState(null)
  
  const hideModal = (e) => {
    e.stopPropagation();
    setDisplayExplorer(null);
    setDisplaySearch(null)
  }

  const showSearchModal = () => {
    setDisplaySearch(<SearchBar hideModal={hideModal} />);
  }

  const showExplorerModal = () => {
    setDisplayExplorer(<Explorer hideModal={hideModal} />);
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
        <div id='search-div' onClick={(e => showSearchModal())}>
          <span id="nav-links">Search</span>
        {displaySearch}
        </div>
        <div id='login-link'>
          <NavLink exact to="/login" id="nav-links">Log in </NavLink>
        </div>
      </div>
  
    </div>
  )
};

export default Navbar;