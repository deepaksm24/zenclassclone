import React from 'react'
import Top from '../top';


function Interview() {
  const collection1 = document.getElementsByClassName("interview-highlighter1");
  const collection2 = document.getElementsByClassName("interview-highlighter2");

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
    pos = "Interview task Submission"
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

export default Interview
