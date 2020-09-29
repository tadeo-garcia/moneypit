import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth'
import { getCategories } from '../store/category'
// import './logoutmodal.css';

export default function Explorer({ hideModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() =>{
      console.log("inside useeffect")
      dispatch(getCategories())
  }, [dispatch])
  
  const category_list = useSelector(state => state.categories)

  console.log(category_list)

  return (
    <>
      <div id="explorer-container">
        <div id='categories-container'>
        SCI-FI
        <br/>
        APPS
        <br/>
        GAMES
        </div>
        <div onClick={hideModal} id='hide-modal'>
        X
        </div>
      </div>
    </>
  )
}

