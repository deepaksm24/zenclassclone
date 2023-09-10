import React from 'react'
import Top from '../top';

function Certificate() {
  const collection1 = document.getElementsByClassName("certificate-highlighter1");
  const collection2 = document.getElementsByClassName("certificate-highlighter2");

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
    pos = "Certificates"
    />
  <br/>
 
  <h4>Your Certificate is not yet Generated.</h4>
    </> 
   
  )
}
export default Certificate
