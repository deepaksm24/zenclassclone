import React from "react";
import Top from '../top';


function Leave() {
  const collection1 = document.getElementsByClassName("leave-highlighter1");
  const collection2 = document.getElementsByClassName("leave-highlighter2");

  setTimeout(() => {
    try {
      collection1[0].style.visibility = "visible";
      collection2[0].children[0].style.color = "blue";
    } catch {}
  }, "100");

  return (
    <>
      <Top pos="Leave" />
    </>
  );
}

export default Leave;
