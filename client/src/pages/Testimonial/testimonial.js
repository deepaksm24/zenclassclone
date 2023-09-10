import React from 'react'
import Top from '../top';


function Testimonial() {
  const collection1 = document.getElementsByClassName("testimonial-highlighter1");
  const collection2 = document.getElementsByClassName("testimonial-highlighter2");

  setTimeout(() => {
    try{
      collection1[0].style.visibility = "visible"
      collection2[0].children[0].style.color = "blue"

    }catch{

    }
  }, "100");
 

  return (
    
    <>
    <Top
    pos = "Testimonial"
    />
  
    </> 
   
  )
}

export default Testimonial
