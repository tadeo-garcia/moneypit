import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/category'

export default function Explorer({ hideModal }) {
  const dispatch = useDispatch();
  
  useEffect(() =>{
      dispatch(getCategories())
  }, [dispatch])
  
  const category_list = useSelector(state => state.categories.list)

  if(!category_list){
    return null
  }

  return (
    <div id="explorer-modal">
      <div id='categories-container'>
        <div id='label-div'>
          <span id='labels'>Categories</span>
          <button onClick={hideModal} id='close-button'> X </button>
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

