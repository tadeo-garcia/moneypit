import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/category';
import { createProject, getProjectsByPledge } from '../store/project';
import { useHistory } from 'react-router-dom';
import '../css/startproject.css';


export default function StartProject() {
  const [displayCatModal, setDisplayCatModal] = useState(null)
  const [categoryChoice, setCategoryChoice] = useState('Select your category')
  const [projectTitle, setProjectTitle] = useState('Name your project')
  const [description, setDescription] = useState('Description')
  const [projectFunding, setProjectFunding] = useState('Funding goal')
  let [categoryImage, setCategoryImage] = useState('')
  let [categoryId, setCategoryId] = useState('')
  const history = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])


  const categories = useSelector(state => state.categories.list)
  const currentUser = useSelector(state => state.auth)

  if (!categories) return null;

  const getCategoryImage = title => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].title === title) {
        setCategoryImage(categories[i].default_pic)
        setCategoryId(categories[i].id)
      }
    }
  }


  const hideCatModal = e => {
    setDisplayCatModal(null)
  }

  const handleCategory = title => {
    hideCatModal();
    setCategoryChoice(title)
    getCategoryImage(title)
  }

  const handleProjectCreate = e => {
    dispatch(createProject(currentUser.id, categoryChoice, projectTitle, description, projectFunding, categoryId, categoryImage))
    dispatch(getProjectsByPledge(currentUser.id))
    return history.push('/profile')
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
            <div className='sp_box-select' onClick={e => showCatModal()}>
              <div id='sp_box-phrase'>
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
            <div className='input-select'>
              <input className='title-input' id='sp_box-phrase' onChange={e => setProjectTitle(e.target.value)} placeholder='Name your project'></input>
            </div>
            <div className='description-box'>
              <textarea placeholder='Description...' onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className='input-select'>
              <i className='fas fa-dollar-sign' style={{ "color": "#015738" }} />
              <input className='title-input funding-input' id='sp_box-phrase-2' onChange={e => setProjectFunding(e.target.value)} placeholder='What is your funding goal?' />
            </div>
          </div>
          <div>
            <div className='sp_lower-box'>
              <div className='sp_first_proj'>
                Your first project! Welcome.
            </div>
              <div className='sp_start-button' onClick={e => handleProjectCreate()}>
                <div id='sp_button-word'>
                  Continue
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
