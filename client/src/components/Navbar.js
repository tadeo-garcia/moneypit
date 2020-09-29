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
      <div id='explorer' onClick={e => showExplorerModal()} >
        Explorer
        {displayExplorer}
      </div>
      <div id='StartProject'>Start a Project</div>
      <div><SearchBar /></div>
    </div>
  )
};

export default Navbar;