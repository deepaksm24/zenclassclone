import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Goto() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    navigate("/class");
  return (
    <div>
      
    </div>
  )
}

export default Goto
