import React from 'react'
import Top from '../top';

function Requirements() {
  const collection1 = document.getElementsByClassName("requirements-highlighter1");
  const collection2 = document.getElementsByClassName("requirements-highlighter2");

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
    pos = "Requirements"
    />
    <br/>
    <div className='container'>
<div className='d-flex flex-column justify-content-center'>
<div className="card" >
  <div className="card-body">
    <h1 className="card-title">Will be evalvated after placement Round</h1>
    <h6 className="card-subtitle mb-2 text-muted">Complete tasks on time</h6>
    <p className="card-text"></p>
  </div>
</div>
</div>
</div>
    </div> 
   
  )
}

export default Requirements
