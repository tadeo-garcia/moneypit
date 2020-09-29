import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/navbar.css';
import Explorer from './Explorer'
import SearchBar from './Search'
// import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
  const [displayExplorer, setDisplayExplorer] = useState(null)
  const hideModal = (e) => {
    e.stopPropagation();
    setDisplayExplorer(null);
  }

  const showExplorerModal = () => {
    setDisplayExplorer(<Explorer hideModal={hideModal} />);
  }

  return (
    <div id='modal-navbar-div'>
      <div id='left-nav-div'>
        <div id='explorer' onClick={e => showExplorerModal()} >
          Explorer
          {displayExplorer}
        </div>
        <div id='startproject'>
          <NavLink exact to="/start" id="startlink">Start a Project </NavLink>
        </div>
      
      </div>

      <div id='mid-nav-div'>
        <NavLink exact to="/">
          <div id='logo-div'></div>
        </NavLink>
      </div>
  
      <div id='right-nav-div'>
      <div><SearchBar /></div>
      </div>
  
    </div>
  )
};

export default Navbar;