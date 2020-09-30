import React, {useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/auth'
import { getCategories } from '../store/category'
import { getProjectsByCategory } from '../store/project'
// import './logoutmodal.css';

export default function Explorer({ hideModal }) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(() =>{
      dispatch(getCategories())
  }, [dispatch])

  // const searchCategory = (e) => {
  //   console.log(e)
  //   dispatch(getProjectsByCategory(e.target.innerHTML))
  // }
  
  const category_list = useSelector(state => state.categories.list)
  const ex_state = useSelector(state=> state)

  if(!category_list){
    return null
  }

  return (
    <>
      <div id="explorer-modal">
        <div id='categories-container'>
          {category_list.map((category,index)=>{
            let link = `/projects/${category.title}`
            return (
              <a href={link} key={index}> {category.title}</a>
            )
          })
        }
        </div>
        <div onClick={hideModal} id='hide-modal'>
        X
        </div>
      </div>
    </>
  )
}

