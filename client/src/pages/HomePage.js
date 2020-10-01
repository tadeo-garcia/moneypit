import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/homepage.css'

export default function HomePage() {

  return (
    <>
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
        <div className='homeHeader__rightside'>
            <p>FEATURED PROJECT</p>
            <img className='homeHeader__imgLg' src='https://ksr-ugc.imgix.net/assets/030/283/499/849ad75399fd59471dbeeea710c835a4_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1597983292&auto=format&frame=1&q=92&s=3588fc3852a74adaf1f345deedf1eec4' alt='Featured Project'></img>
            <p id='featuredTitle'>
              3-in-1 STEM based Raspberry Pi Robots Kit for All Ages
            </p>
            <p id='featuredDes'>
              Over a year ago, Adeept and DuinoKit teamed up and prepared to 
              launch this Kickstarter project to help Makers and Programmers 
              construct their dreams.  These funs robotics kits combine Programming, 
              mechanical engineering, and AI logic in each robotic for learning and fun.
              These robotics kits are the easiest educational robot for helping Robot 
              Enthusiasts, Python Engineers, Students, and Kids learn about robotics 
              and programming with a fun, hands-on experience.

            </p>
        </div>
        <div className='homeHeader__leftside'>
          <div>
            
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}
