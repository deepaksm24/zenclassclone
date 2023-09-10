import React from "react";
import { Tabs } from "antd";
import Register from "./Register";
import MockInterview from "./Mockinterview";
import Additionalsessions from "./AdditionalSessions";
import Sessionclass from "./Sessionclass";
import Tasks from "./Task";
import Placement from "./Placement";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";


function Admin() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container w-100 p-1">
      <div className="d-flex justify-content-between ">
      <h1 >Admin </h1>
      
      <LogoutIcon fontSize="large" className="mt-2 ml-4"
            onClick={()=>{
              localStorage.removeItem("token");
              navigate("/login")
            }}/>
       
        </div>
      
      </div>
      <Tabs defaultActiveKey="1" size="large" className="p-2">
        <Tabs.TabPane tab="AddStudent" key="1">
          <Register />
        </Tabs.TabPane>
        <Tabs.TabPane tab="AddPlacement" key="2">
          <Placement />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Session-Class" key="3">
          <Sessionclass />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tasks" key="4">
          <Tasks />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Queries" key="5"></Tabs.TabPane>
        <Tabs.TabPane tab="Webcode" key="6"></Tabs.TabPane>
        <Tabs.TabPane tab="Additionalsessions" key="7">
          <Additionalsessions />
        </Tabs.TabPane>
        <Tabs.TabPane tab="MockInterview" key="8">
          <MockInterview />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
