import React from 'react'
import Top from '../top';


function Portfoilio() {
  const collection1 = document.getElementsByClassName("portfoilio-highlighter1");
  const collection2 = document.getElementsByClassName("portfoilio-highlighter2");

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
    pos = "Portfoilio Submission"
    />
  To be assigned
    </> 
   
  )
}

export default Portfoilio
