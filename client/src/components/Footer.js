import React from 'react';
import { Link } from 'react-router-dom'
import '../css/footer.css'


function Footer() {


  return (
    <>
      <div className='footer-wrapper'>
        <div className='footer_categories'>
          <div className='footer_categories-ul'>
            <ul id='footer-category-list'>
              <span id='footer-category-list_category'>
                <Link to='/projects/arts' style={{ textDecoration: 'none', color: '#282828' }}>Arts</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/comics&illustrations' style={{ textDecoration: 'none', color: '#282828' }}>Comics & Illustrations</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/design&tech' style={{ textDecoration: 'none', color: '#282828' }}>Design & Tech</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/film' style={{ textDecoration: 'none', color: '#282828'}}>Film</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/food&craft' style={{ textDecoration: 'none', color: '#282828' }}>Food & Craft</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/games' style={{ textDecoration: 'none', color: '#282828' }}>Games</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/music' style={{ textDecoration: 'none', color: '#282828' }}>Music</Link>
              </span>
              <span id='footer-category-list_category'>
                <Link to='/projects/publishing' style={{ textDecoration: 'none', color: '#282828' }}>Publishing</Link>
              </span>
            </ul>
          </div>
        </div>
        <div className='footer_icons-box'>
          <a href='https://github.com/tadeo-garcia/moneypit' style={{ color: 'black' }}>
            <i className='fa fa-github fa-2x' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;
