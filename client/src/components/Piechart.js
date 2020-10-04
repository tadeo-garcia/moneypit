import React, { useEffect, useRef } from 'react';
import '../css/piechart.css';

export default function Piechart({categories}) {
  const canvasRef = useRef(null)
  
  const randomColor = () => {
    return '#' + Math.random().toString(16).slice(2,8)
  }

  let colors = []
  let cat = {}
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

  console.log(categories)

  useEffect(()=>{
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d')
    canvas.width=300;
    canvas.height=300;
    let total = 8;
    let startAngle = 0;
    let radius = 100;
    let cx = canvas.width/2;
    let cy = canvas.height/2;

    categories.forEach(category => {
      let categoryLink = `/projects/${category.title}`
      // console.log(categoryLink)
      context.fillStyle = category.color
      context.fillText = (categoryLink)
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
      canvas.addEventListener('mousedown', on_mousedown, false);
      function
      startAngle = endAngle
    })

  

  })

  return <canvas ref={canvasRef} />
}

