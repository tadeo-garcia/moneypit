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
      dispatch(getCategories())
  }, [dispatch])
  
  const category_list = useSelector(state => state.categories.list)
  const ex_state = useSelector(state=> state)

  console.log(category_list)
  console.log(ex_state)

  if(!category_list){
    return null
  }

  return (
    <div id="explorer-modal">
    
    <div id='categories-container'>
      <div id='label-div'>
        <span id='labels'>Categories</span>
        <button onClick={hideModal}> X </button>
      </div>
      {category_list.map((category,index)=>{
          let link = `/projects/${category.title}`
          return (
            <div id= 'category-div'>
              <a href={link} key={index} id='category-link'> {category.title}</a>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

