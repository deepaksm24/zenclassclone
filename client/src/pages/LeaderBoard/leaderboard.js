import React from "react";
import Top from "../top";

function Leaderboard() {
  const collection1 = document.getElementsByClassName(
    "leaderboard-highlighter1"
  );
  const collection2 = document.getElementsByClassName(
    "leaderboard-highlighter2"
  );

  setTimeout(() => {
    try {
      collection1[0].style.visibility = "visible";
      collection2[0].children[0].style.color = "blue";
    } catch {}
  }, "100");

  return (
    <>
      <Top pos="LeaderBoard" />
    </>
  );
}

export default Leaderboard;
