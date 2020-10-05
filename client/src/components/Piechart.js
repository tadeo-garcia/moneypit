import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import '../css/piechart.css';

export default function Piechart({categories}) {
  const canvasRef = useRef(null)
  
  const randomColor = () => {
    return '#' + Math.random().toString(16).slice(2,8)
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
    canvas.width=175;
    canvas.height=175;
    let startAngle = 0;
    let radius = (100/3);
    let cx = canvas.width/2;
    let cy = canvas.height/2;

    categories.forEach(category => {
      context.fillStyle = category.color
      context.lineWidth = 4;
      context.strokeStyle = '#eeeeee';
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
    <div id='pie-chart-popup'> 
      <div id='category-links'>
        {categories.map(category => {
          if (category.color !== '#e9e9e9') {
            let link = `projects/${category.title}`
            let linkStyle = {color: `${category.color}`}
            let title = `${category.title}`
            return (<Link className='category-link'
            key={category.id} 
            id={category.id}
            to={link} style={linkStyle}> 
            {title} 
            </Link>)
          } else {
            return null
          }
        })
        }
      </div> 
     <canvas ref={canvasRef} id='pie-chart-canvas' categories={categories}/>
    </div>
  ) 
}
























