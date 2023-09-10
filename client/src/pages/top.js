import React from "react";
import {  useSelector } from "react-redux";
import AccountMenu from "./Logout";

function Top({pos}) {

   
  const { user } = useSelector((state) => state.users);
  let name = "User";

  if (user.name) {
    name = user.name;
  }
  setTimeout(() => {
    try {
      name = user.name;
    } catch {}
  }, "100");

  return (
    <div className="boxwid border border-2 p-4">
      <div className="d-flex justify-content-between">
        <h5 className="display-4 font-weight-normal">{pos}</h5>
       
        <AccountMenu/>
      </div>
      <div></div>
    </div>
  );
}
export default Top;
