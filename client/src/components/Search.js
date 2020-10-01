import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import SearchModal from './SearchModal'

export default function SearchBar({ hideModal }) {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(searchCity(city,state))
    // history.push(`/listings/${city}`)
  }



  return (
    <div id='search-div'>
      <div className="flex-form" onSubmit={handleSubmit} onChange={e => setSearchTerm(e.target.value)}>
        <input type="text" id="search-input" placeholder="Search for Projects or Categories" />
        <button onClick={hideModal} id='close-search-button' >
          X
        </button>
        <SearchModal searchTerm={searchTerm} />
      </div >
    </div >
  );

};
