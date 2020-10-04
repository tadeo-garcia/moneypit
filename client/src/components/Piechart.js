import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { getProjectsByOwnerAndCategory } from '../store/project'
import '../css/piechart.css';

export default function Piechart({categories}) {
  const user = useSelector((state) => state.auth);
  const canvasRef = useRef(null)
  const dispatch = useDispatch();
  
  const randomColor = () => {
    return '#' + Math.random().toString(16).slice(2,8)
  }

  function handleClick(e) {
    e.preventDefault()
    let category = e.target.id
    dispatch(getProjectsByOwnerAndCategory(user.id, category))
  }

  let colors = []
  for(let i=0; i<categories.length; i++){
    if (categories[i].length>=1){
      colors.push(randomColor())
      categories[i].color= randomColor()
    }
    else{
      colors.push('#e9e9e9')
      categories[i].color = '#e9e9e9'
    }
  }

  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d')
    canvas.width=300;
    canvas.height=300;
    let total = 8;
    let startAngle = 0;
    let radius = (100/3);
    let cx = canvas.width/2;
    let cy = canvas.height/2;

    categories.forEach(category => {
      context.fillStyle = category.color
      context.lineWidth = 4;
      context.strokeStyle = '#d3d3d3';
      context.beginPath();
      let endAngle = ((1/8) * Math.PI * 2 ) + startAngle;
      context.moveTo(cx,cy);
      context.arc(cx,cy, radius, startAngle, endAngle, false)
      context.lineTo(cx, cy)
      context.fill();
      context.stroke();
      context.closePath();
      startAngle = endAngle
    })
  })

  return(
    <>
      <div id='category-links'>
        {categories.map(category => {
          console.log(`${category.color}`)
          if (category.color !== '#e9e9e9') {
            let link = `projects/${category.title}`
            let linkStyle = {color: `${category.color}`}
            let title = `${category.title}`
            return <Link className='category-link' 
            id={category.id} onClick={handleClick} 
            to={link} style={linkStyle} > {title} </Link>
          }
        })
        }
      </div> 
     <canvas ref={canvasRef} id='pie-chart-canvas' categories={categories}/>
    </>
  ) 
}
























