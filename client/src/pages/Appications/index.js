import React from 'react'
import Top from '../top';

function Applications() {
  const collection1 = document.getElementsByClassName("applications-highlighter1");
  const collection2 = document.getElementsByClassName("applications-highlighter2");

  setTimeout(() => {
    try{
      collection1[0].style.visibility = "visible"
      collection2[0].children[0].style.color = "blue"

    }catch{

    }
  }, "100");
 

  return (
    <div>
    <Top
    pos = "Applications"
    />
    <br/>
    <div className='container'>
<div className='d-flex flex-column justify-content-center'>
<div className="card" >
  <div className="card-body">
    <p className="card-text">Content available after completing Placement preparation</p>
  </div>
</div>
</div>
</div>
    </div> 
  )
}

export default Applications
