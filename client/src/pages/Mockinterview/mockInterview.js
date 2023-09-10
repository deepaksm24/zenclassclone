import React, { useState, useEffect } from "react";
import Top from '../top';
import { Button, Table, message } from "antd";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GetAllmock } from "../../api/users";
import { Hideloading, ShowLoading } from "../../redux/loadersSlice";
import { useDispatch} from "react-redux";
import moment from "moment";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';


function MockInterview() {
  const navigate = useNavigate();

  const [mock, setMock] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Mock Interview Round",
      dataIndex: "interviewername",
    },
    {
      title: "Interview Date",
      dataIndex: "interviewdate",
      render: (text, record) => {
        return moment(record.interviewdate).format("DD-MM-YYYY");
      },
    },
    {
      title: "OverAll Score",
      dataIndex: "nodejsscore",
    },
    {
      title: "Recording URL ",
      dataIndex: "url",
    },
    {
      title: "Comments",
      dataIndex: "comment",
     
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="d-flex gap-2">
            <MoreVertIcon
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            
            />
            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>{
           
            
        }}>
          View in detail
        </MenuItem>
       
      
      </Menu>

           
          </div>
        );
      },
    },
   
  ];
  const getAlldata= async () => {


    try {
      dispatch(ShowLoading());
      const response = await GetAllmock();
      

      if (response.success) {
        setMock(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(Hideloading());
    } catch (error) {
      message.error(error.message);
      dispatch(Hideloading());
    }
  };
  useEffect(() => {
    getAlldata();
    
  }, []);





  return (
    
    <div>
    <Top
    pos = "Mockinterview"
    />

   <Table className="mt-4"
   columns={columns}
   dataSource={mock}
   />
    </div> 
   
  )
}

export default MockInterview
