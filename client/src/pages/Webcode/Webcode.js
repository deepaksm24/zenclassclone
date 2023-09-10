import React from 'react'
import Top from '../top';
import { useDispatch, useSelector } from "react-redux";
import { SetUser1 } from "../../redux/users1Slice";
import { Collection } from 'immutable';

function Webcode() {
  const dispatch = useDispatch();
  const { user1 } = useSelector((state) => state.users1);
  // dispatch(SetUser1("1"));
  
  // const collection2 = document.getElementsByClassName("webcode-highlighter2");

  setTimeout(() => {
    try{
      // dispatch(SetUser1(collection1));
      // collection1[0].style.visibility = "visible"
      // collection2[0].children[0].style.color = "blue"

    }catch{

    }
  }, "100");
 

  return (
    
    <div>
    <Top
    pos = "Webcode"
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

export default Webcode
