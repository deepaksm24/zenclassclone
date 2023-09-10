import React from "react";
import Top from "../top";

function Syllabus() {
  const collection1 = document.getElementsByClassName("syllabus-highlighter1");
  const collection2 = document.getElementsByClassName("syllabus-highlighter2");

  setTimeout(() => {
    try {
      collection1[0].style.visibility = "visible";
      collection2[0].children[0].style.color = "blue";
    } catch {}
  }, "100");

  return (
    <div>
      <div className="container-fluid">
        <Top pos="Syllabus" />
      </div>
      <br /> <br /> <br /> <br /> <br /> <br />
      <div className="content mt-5">
        <div className="">
          <table className="table rounded">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Syllabus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FSD-MERN</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Syllabus;
