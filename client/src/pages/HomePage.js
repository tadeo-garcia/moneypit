import React from 'react';
import { getProjectsByCategory } from '../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

export default function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();


  function searchCategory(e) {
    e.preventDefault()
    dispatch(getProjectsByCategory(e.target.innerHTML))
    history.push(`/category/${e.target.innerHTML}`)
  }

  return (
    <div className='home'>
      <a href={'/category/games'} key={1} onClick={searchCategory}> Games</a>
      <h1>Break</h1>
      <a href={'/category/books'} key={2} onClick={searchCategory}> Books</a>
    </div>
  )
}