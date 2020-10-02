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

  const closeSearch = () => {
    setSearchTerm('')
  }

  return (
    <div id='search-div'>
      <div className="flex-form" onSubmit={handleSubmit} onChange={e => setSearchTerm(e.target.value)}>
        <input type="text" id="search-input" placeholder="Search for Projects or Categories" />
        {(searchTerm ? <i onClick={closeSearch} className='fa fa-times close_query' id='close-query-button' /> : null)}
        <SearchModal searchTerm={searchTerm} />
        {/* <button onClick={hideModal} id='close-search-button' > */}
        <i onClick={hideModal} class='fa fa-times close_search' id='close-search-button' >
        </i>
      </div >
    </div >
  );

};
