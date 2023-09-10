import React, { useEffect, useState } from "react";
import { GetCurrentuser } from "../api/users";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { Hideloading, ShowLoading } from "../redux/loadersSlice";

function ProtCheck({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.loaders);

  const { user } = useSelector((state) => state.users);

  const getCurrentUser = async () => {
    try {
      const response = await GetCurrentuser();
      if (response.success) {
        dispatch(SetUser(response.data));
        if(response.data.isAdmin == "true"){
          navigate("/admin")
        }else{
          navigate("/class")
        }
      
      } else {
        dispatch(SetUser(null));
      }
    } catch (error) {
      dispatch(SetUser(null));

      return error.message;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCurrentUser();

    } else {
      navigate("/login");
    }
  }, []);
  return <>{children}</>;
}

export default ProtCheck;
