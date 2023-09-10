import React, { useEffect, useState } from "react";
import { GetCurrentuser } from "../api/users";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { Hideloading, ShowLoading } from "../redux/loadersSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import logo from "../../src/images.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import HelpIcon from "@mui/icons-material/Help";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AppsIcon from "@mui/icons-material/Apps";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function ProtecdRoute({ children }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.loaders);

  const { user } = useSelector((state) => state.users);

  const onClick = (event) => {};

  const getCurrentUser = async () => {
    try {
      dispatch(ShowLoading());

      const response = await GetCurrentuser();

      dispatch(Hideloading());

      if (response.success) {
        dispatch(SetUser(response.data));
        if(response.data.isAdmin == "true"){
          navigate("/admin")
        }
        
      } else {
        dispatch(SetUser(null));
      }
    } catch (error) {
      dispatch(SetUser(null));
      dispatch(Hideloading);
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
  return (
    user && (
      
      <div className="mainbody">
        {/* {user.name} */}
        <div className="row">  
        <div className="bodyofhome d-flex">
       
          <nav className="navbar">
            <ul className="navbar-nav ">
              <li className="logo" key="logo">
                <img src={logo} alt="..." className="logonavbar" />
                <span className="link-text">Student</span>
              </li>
              <li className="nav-item" key="icon1" onClick={onClick}>
                <a href="/class" className="nav-link">
                  <div className="class-highlighter1">
                    <DoubleArrowIcon className="" sx={{ fontSize: 20 }} />
                  </div>
                  <div className="class-highlighter2">
                    <AccountBoxIcon
                      sx={{ fontSize: 25 }}
                      className="sideicons"
                      color="disabled"
                    />
                  </div>
                  <span className="link-text">Class</span>
                </a>
              </li>
              <li className="nav-item" id="dashboard" onClick={onClick}>
                <a href="/dashboard" className="nav-link">
                  <div className="dash-highlighter1">
                    <DoubleArrowIcon className="" sx={{ fontSize: 20 }} />
                  </div>
                  <div className="dash-highlighter2">
                    <DashboardIcon className="sideicons" />
                  </div>
                  <span className="link-text">DashBoard</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/tasks" className="nav-link">
                  <div className="task-highlighter1">
                    <DoubleArrowIcon className="" sx={{ fontSize: 20 }} />
                  </div>
                  <div className="task-highlighter2">
                    <AddTaskIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Tasks</span>
                </a>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => {
                    navigate("/webcode");
                  }}
                >
                  <div className="webcode-highlighter1">
                    <DoubleArrowIcon className="" sx={{ fontSize: 20 }} />
                  </div>
                  <div className="webcode-highlighter2">
                    <ChecklistRtlIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Webcode</span>
                </div>
              </li>
              <li className="nav-item">
                <a href="/capstone" className="nav-link">
                  <div className="capstone-highlighter1">
                    <DoubleArrowIcon className="" sx={{ fontSize: 20 }} />
                  </div>
                  <div className="capstone-highlighter2">
                    <ChecklistRtlIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Capstone</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/queries" className="nav-link">
                  <div className="queries-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="queries-highlighter2">
                    <HelpIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Queries</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/requirements" className="nav-link">
                  <div className="requirements-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="requirements-highlighter2">
                    <AddRoadIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Requirements</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/portfolio" className="nav-link">
                  <div className="portfoilio-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="portfoilio-highlighter2">
                    <ChecklistRtlIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">PortFolio</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/applications" className="nav-link">
                  <div className="applications-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="applications-highlighter2">
                    <WebAssetIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Applications</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="interview-tasks" className="nav-link">
                  <div className="interview-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="interview-highlighter2">
                    <ChecklistRtlIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Interview tasks</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/leave" className="nav-link">
                  <div className="leave-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>

                  <div className="leave-highlighter2">
                    <ChecklistRtlIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Leave</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/mockinterview" className="nav-link">
                  <div className="mockInterview-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="mockInterview-highlighter2">
                    <PlaylistAddCheckIcon
                      color="disabled"
                      className="sideicons"
                    />
                  </div>
                  <span className="link-text">Mock interview</span>
                </a>
              </li>

              <li className="nav-item">
                <a href="/certificate" className="nav-link">
                  <div className="certificate-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>

                  <div className="certificate-highlighter2">
                    <PlaylistAddCheckIcon
                      color="disabled"
                      className="sideicons"
                    />
                  </div>
                  <span className="link-text">Certificate</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/testimonials" className="nav-link">
                  <div className="testimonial-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="testimonial-highlighter2">
                    <PlaylistAddCheckIcon
                      color="disabled"
                      className="sideicons"
                    />
                  </div>
                  <span className="link-text">Testimonial</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/leaderboard" className="nav-link">
                  <div className="leaderboard-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="leaderboard-highlighter2">
                    <PlaylistAddCheckIcon
                      color="disabled"
                      className="sideicons"
                    />
                  </div>
                  <span className="link-text">LeaderBoard</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/syllabus" className="nav-link">
                  <div className="syllabus-highlighter1">
                    <DoubleArrowIcon className="" sx={{ fontSize: 20 }} />
                  </div>
                  <div className="syllabus-highlighter2">
                    <AppsIcon color="disabled" className="sideicons" />
                  </div>
                  <span className="link-text">Syllabus</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/placement" className="nav-link">
                  <div className="placement-highlighter1">
                    <DoubleArrowIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="placement-highlighter2">
                    <Brightness5Icon color="disabled" className="sideicons" />
                  </div>{" "}
                  <span className="link-text">Placement Board</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="col">

          <div className="maincontent ">{children}</div></div>

        </div>
        </div>
      </div>
    )
  );
}

export default ProtecdRoute;
