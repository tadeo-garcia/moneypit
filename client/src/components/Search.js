import React, { useState } from 'react';
import SearchModal from './SearchModal'

export default function SearchBar({ hideModal }) {
  const [searchTerm, setSearchTerm] = useState('')


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(getProject(id))
  //   history.push(`/listings/${id}`)
  // }

  const closeSearch = () => {
    setSearchTerm('')
  }

  return (
    <div id='search-div'>
      <div className="flex-form" onChange={e => setSearchTerm(e.target.value)}>
        <input type="text" id="search-input" placeholder="Search for Projects or Categories" />
        {(searchTerm ? <i onClick={closeSearch} className='fa fa-times close_query' id='close-query-button' /> : null)}
        <SearchModal searchTerm={searchTerm} hideModal={hideModal} />
        {/* <button onClick={hideModal} id='close-search-button' > */}
        <i onClick={hideModal} class='fa fa-times close_search' id='close-search-button' >
        </i>
      </div >
    </div >
  );

};
