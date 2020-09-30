import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
// import { getProjectsByCategory } from '../store/project'
import '../css/searchbar.css'

export default function SearchBar({hideModal}) {
  const history = useHistory()
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // dispatch(searchCity(city,state))
    // history.push(`/listings/${city}`)
  }

    return (
      <div className="cover">
        <div className="flex-form" onSubmit={handleSubmit}>
          <input
            type="text"
            // value={city}
            // onChange={e => setCity(e.target.value)}
            placeholder="Search for Projects or Categories"
          />
          <button onClick={handleSubmit} className='submit_button'>search</button>
        </div>
        <div onClick={hideModal} id='hide-modal'>
        X
        </div>
      </div>
    );
};
