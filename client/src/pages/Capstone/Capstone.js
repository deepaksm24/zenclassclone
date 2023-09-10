import React from 'react'
import Top from '../top';


function Capstone() {
  const collection1 = document.getElementsByClassName("capstone-highlighter1");
  const collection2 = document.getElementsByClassName("capstone-highlighter2");

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
    pos = "Capstone"
    />
    <br/>
    <div className='container'>
<div className='d-flex flex-column justify-content-center'>
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">To be assigned</h5>
    <p className="card-text"></p>
  </div>
</div>
</div>
</div>
    </div> 
   
  )
}

export default Capstone
