import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../css/searchbar.css'

export default function SearchBar({hideModal}) {
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    // dispatch(searchCity(city,state))
    // history.push(`/listings/${city}`)
  }

    return (
      <div id='search-div'>
        <div className="flex-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="search-input"
            // value={city}
            // onChange={e => setCity(e.target.value)}
            placeholder="Search for Projects or Categories"
          />
          
          <button onClick={hideModal} id='close-search-button' >
          X
          </button>
          </div>
      </div>
    );
};
