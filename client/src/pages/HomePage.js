import React from 'react';
import { getProjectsByCategory } from '../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();


  const searchCategory = (category) => {
    dispatch(getProjectsByCategory(category))
  }

  return (
    <div className='home'>
      <a href={'/category/games'} key={1} onClick={searchCategory('Games')}> games</a>
    </div>
  )
}

export default HomePage;