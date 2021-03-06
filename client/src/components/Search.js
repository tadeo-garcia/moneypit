import React, { useState } from 'react';
import SearchModal from './SearchModal'

export default function SearchBar({ hideModal }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const closeSearch = () => {
    setSearchTerm('')
  }

  return (
    <div id='search-div'>
      <div className="flex-form" onSubmit={handleSubmit} onChange={e => setSearchTerm(e.target.value)}>
        <input type="text" id="search-input" autoComplete='off' placeholder="Search for Projects or Categories" />
        {/* {(searchTerm ? <i onClick={closeSearch} className='fa fa-times close_query' id='close-query-button' /> : null)} */}
        <SearchModal searchTerm={searchTerm} hideModal={hideModal} />
        <i onClick={hideModal} className='fa fa-times close_search' id='close-search-button' >
        </i>
      </div >
    </div >
  );

};
