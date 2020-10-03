import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/category'
import { getProjectsByCategory } from '../store/project'
import { useHistory } from 'react-router-dom';

export default function Explorer({ hideModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() =>{
      dispatch(getCategories())
  }, [dispatch])

  function searchCategory(e) {
    e.preventDefault()
    let category = e.target.innerHTML.trim()
    dispatch(getProjectsByCategory(category))
    hideModal(e)
    history.push(`/category/${category}`)
  }
  
  const category_list = useSelector(state => state.categories.list)

  if(!category_list){
    return null
  }

  return (
    <div id="explorer-modal">
      <div id='categories-container'>
        <div id='label-div'>
          <span id='labels'>Categories</span>
          <i onClick={hideModal} className='fa fa-times' id='close-search-button' >
          </i>
        </div>
        {category_list.map((category,index)=>{
            let link = `/projects/${category.title}`
            return (
              <div id= 'category-div' key={category.title}>
                <a href={link} key={index} id='category-link' onClick={searchCategory}> {category.title} </a>
                <span>{category.length}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

