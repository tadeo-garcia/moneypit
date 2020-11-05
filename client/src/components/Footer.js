import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../css/footer.css'


function Footer() {


  return (
    <>
      <div className='footer-wrapper'>
        <div className='footer_categories'>
          <div className='footer_categories-ul'>
            <ul id='footer-developer-list'>
              <span>Developers:</span>
              <span>
                <a href='https://brandonheld.netlify.app/' id='footer-link'>Brandon Held</a>
              </span>
              <span>
                <a href='http://www.nicholaslitz.com/' id='footer-link'>Nick Litz</a>
              </span>
              <span>
                <a href='https://uribgp.com' id='footer-link'>Steven Tegnelia</a>
              </span>
              <span>
                <a href='https://tadeogarcia.me' id='footer-link'>Tadeo Garcia</a>
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
