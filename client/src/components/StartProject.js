import React, { useState } from 'react';
import '../css/startproject.css'


export default function StartProject() {
  const [displayCatModal, setDisplayCatModal] = useState(null)
  const [categoryChoice, setCategoryChoice] = useState('Select your category')

  const showCatModal = () => {
    displayCatModal(true)
  }

  const hideModal = e => {
    e.stopPropagation();
    displayCatModal(null)
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
          </div>
          {(showCatModal) ?
          <div className='sp_select-category' onClick={setCategoryChoice}>

          </div>
          :
          null
          }
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
