import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/category';
import '../css/startproject.css'


export default function StartProject() {
  const [displayCatModal, setDisplayCatModal] = useState(null)
  const [categoryChoice, setCategoryChoice] = useState('Select your category')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categories = useSelector(state => state.categories.list)
  console.log(categories)
  console.log(categoryChoice)


  const hideCatModal = e => {
    setDisplayCatModal(null)
  }

  const handleCategory = title => {
    hideCatModal();
    setCategoryChoice(title)
  }


  const showCatModal = e => {
    setDisplayCatModal(true);
    if (displayCatModal) {
      setDisplayCatModal(null)
    } else {
      setDisplayCatModal(
        categories.map((category, index) => {
          return (
            <div className='sp_box-one-modal' key={index} onClick={e => handleCategory(category.title)}>
              <div className='sp_box-one-modal__category'>
                <div>{category.title}</div>
              </div>
            </div>
          )
        })
      )
    }
  }

  return (
    <>
      <div className='start_project_container'>
        <div className='start_project-box'>
          <div className='sp_box-one'>
            <div id='sp_box-one__top-text'>First, let's get you set up.</div>
            <div id='sp_box-one__bottom-text'>
              Pick a project category to connect with a specific community. You can always update this later.
          </div>
            <div className='sp_box-one-select' onClick={e => showCatModal()}>
              <div id='sp_box-one-select-phrase'>
                {categoryChoice}
              </div>
              <i className='fa fa-caret-down' />
            </div>
            {(displayCatModal) ?
              <div className='sp_box_one-modal-container'>
                {displayCatModal}
              </div>
              :
              null
            }
          </div>
          <div>
            <div className='sp_lower-box'>
              <div className='sp_first_proj'>
                Your first project! Welcome.
            </div>
              <div className='sp_start-button'>
                <div id='sp_button-word'>
                  Next: Project idea
                </div>
              </div>
            </div>
          </div>
          <div className='sp_disclaimer'>
            <div id='disclaimer-memo'>
              To create a project, you're required to provide your location, age, national ID, banking and tax information, email, and mailing address. This information is necessary to prevent fraud, comply with the law, and — if your project is successful — to deliver funds. Please note: after launch, your ability to edit, hide, or delete a project is limited.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
