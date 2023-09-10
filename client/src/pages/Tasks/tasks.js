import React from 'react'
import Top from '../top';


function Tasks() {

 

  return (
    
    <div>
    <Top
    pos = "Tasks"
    />
    <br/>
    <div className='container'>
<div className='d-flex flex-column justify-content-center'>
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">To be assigined</h5>
    <p className="card-text"></p>
  </div>
</div>
</div>
</div>
    </div>  
  

   
  )
}

export default Tasks
