import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/homepage.css'
import Footer from '../components/Footer'

export default function HomePage() {

  return (
    <>
      <div className='homeBody'>
        <div className='bodyBox'>
          <div className='subbarWrapper'>
            <div className='subbar__categories'>
              <NavLink to='#' className='navlink'>Apps</NavLink>
              <NavLink to='#' className='navlink'>3D Printing</NavLink>
              <NavLink to='#' className='navlink'>Hardware</NavLink> 
              <NavLink to='#' className='navlink'>Gadgets</NavLink>  
              <NavLink to='#' className='navlink'>Robots</NavLink>  
              <NavLink to='#' className='navlink'>Software</NavLink>
              <NavLink to='#' className='navlink'>Wearables</NavLink>
              <NavLink to='#' className='navlink'>Web</NavLink>
            </div>
          </div>
          <div className='homeHeader'>
            <div className='homeHeader__leftside'>
                <p id='featuredLabel'>FEATURED PROJECT</p>
                <img className='homeHeader__imgLg' src='https://ksr-ugc.imgix.net/assets/030/283/499/849ad75399fd59471dbeeea710c835a4_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1597983292&auto=format&frame=1&q=92&s=3588fc3852a74adaf1f345deedf1eec4' alt='Featured Project'></img>
                <p id='featuredTitle'>
                  3-in-1 STEM based Raspberry Pi Robots Kit
                </p>
                <p id='featuredDes'>
                  These robotics kits are the easiest educational robot for helping Robot 
                  Enthusiasts, Python Engineers, Students, and Kids learn about robotics 
                  and programming with a fun, hands-on experience.

                </p>
            </div>
            <div className='homeHeader__rightside'>
              <p id='featuredLabel'>RECOMMENDED FOR YOU</p>
              <div id='topSmallBox' className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' src='https://ksr-ugc.imgix.net/assets/030/784/852/3cd349a37327640996543dda9340617b_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1601316996&auto=format&frame=1&q=92&s=e66e220372a4039cc20d92f23523450a' alt='Recommended Project 1'></img>
                <div>
                  <p className='homeHeader__tittle'>Tokroo</p>
                  <p className='homeHeader__funded'>15000% funded</p>
                  <p className='homeHeader__madeBy'>By Dominic Miller</p>
                </div>
              </div>
              <div className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' src='https://ksr-ugc.imgix.net/assets/030/784/852/3cd349a37327640996543dda9340617b_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1601316996&auto=format&frame=1&q=92&s=e66e220372a4039cc20d92f23523450a' alt='Recommended Project 1'></img>
                <div>
                  <p className='homeHeader__tittle'>Tokroo</p>
                  <p className='homeHeader__funded'>15000% funded</p>
                  <p className='homeHeader__madeBy'>By Dominic Miller</p>
                </div>
              </div>
              <div className='homeHeader__smallBoxes'>
                <img className='homeHeader__imgSmall' src='https://ksr-ugc.imgix.net/assets/030/784/852/3cd349a37327640996543dda9340617b_original.png?ixlib=rb-2.1.0&crop=faces&w=352&h=198&fit=crop&v=1601316996&auto=format&frame=1&q=92&s=e66e220372a4039cc20d92f23523450a' alt='Recommended Project 1'></img>
                <div>
                  <p className='homeHeader__tittle'>Tokroo</p>
                  <p className='homeHeader__funded'>15000% funded</p>
                  <p className='homeHeader__madeBy'>By Dominic Miller</p>
                </div>
              </div>            
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
