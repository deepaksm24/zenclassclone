import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Top from "../top";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { GetAddClass, GetClass } from "../../api/users";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-30%, -30%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedclass, setSelectedClass] = React.useState([]);
  const [message, setMessage] = React.useState("Join the class on time!");
  const [classd, setClassd] = useState([]);
  const [classdaa, setClassdaa] = useState([]);

  const [selectedclassd, setSelectedclassd] = useState([]);

  const [session, setSession] = React.useState("No session title available");
  const [session1, setSession1] = React.useState(
    "Class schedule is not updated"
  );

  const [content, setContent] = React.useState("No content available");

  const [preread, setPreread] = React.useState("No preread available");

  const [url, setUrl] = React.useState("");

  const [buttonclass, setButtonclass] = React.useState(
    "btn btn-success classbutton"
  );
  const [activity, setActivity] = React.useState("");

  const [actclass, setActclass] = React.useState("classbutton");
  const [addclass, setAddclass] = React.useState("card m-2 cursor-pointer");


  const getAddclassdet = () => {
    return (
      <div className="d-flex flex-column justify-content-start">
        {classdaa.map((student, index) => {
          return (
            <div className="flex-fill">
              <div className={addclass} onClick={() => {
 setMessage("Please watch the recording");
 setSession(classdaa[index].name);
 setSession1(classdaa[index].time);
 setContent(classdaa[index].contents);
 setPreread(classdaa[index].preread);
 setButtonclass("btn btn-success shadow ");
 setActclass("classbutton");
 setUrl(classdaa[index].url);
 window.scrollTo(0, 0);
              }}>
                <div className="card-body">
                  <h5 className="card-title">{student.name}</h5>
                  <p className="card-title">{student.Time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {}, []);

  const getClass = () => {
    const totalSeats = 44;
    const columns = 5;
    const getLine = (n) => {
      if (n < 4) {
        return <HorizontalRuleIcon />;
      }
    };

    return (
      <div className="d-flex flex-column justify-content-between">
        {Array.from(Array(9).keys()).map((seat, index) => {
          return (
            <div className="d-flex gap-1 justify-content-center">
              {Array.from(Array(columns).keys()).map((column, index) => {
                let seatclass = "seat  cursor-pointer ";
                const seatNumber = seat * columns + column + 1;
                if (seatNumber <= classd.length) {
                  seatclass = "seatmark cursor-pointer ";
                }

                return (
                  <div className="d-flex">
                    <div
                      className={seatclass}
                      onClick={() => {
                        const filtered = classd.filter((e) => {
                          return e.classno === seatNumber;
                        });
                        if (filtered.length > 0) {
                          setMessage("Please watch the recording");
                          setSession(filtered[0].name);
                          setSession1(filtered[0].time);
                          setContent(filtered[0].contents);
                          setPreread(filtered[0].preread);
                          setButtonclass("btn btn-success");
                          setActclass("border text-dark border rounded mt-2");
                          setActivity(filtered[0].activity);
                          setUrl(filtered[0].url);
                        }
                      }}
                    >
                      {seat * columns + column + 1}
                    </div>

                    <div className="justify-content-center align-items-center mt-3">
                      {getLine(column)}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };
  const getClassd = async () => {
    try {
      const response = await GetClass();

      const response1 = await GetAddClass();

      setClassd(response.data);
      setClassdaa(response1.data);
    } catch (error) {}
  };
  useEffect(() => {
    getClassd();
  }, []);

  return (
    <div>
      <Top pos="Class" />
      <br />
      <br />

      <div className="classbox">
        <div className="d-flex">
          <div className="flex-fill flex-column  ">
            <div
              style={{ backgroundColor: "#4b0dba" }}
              className="d-flex border p-3  text-white border rounded justify-content-between"
            >
              <p className="h3">{message}</p>
              <button
                type="button"
                className={buttonclass}
                onClick={handleOpen}
              >
                <h4>Play Recording</h4>
              </button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Recording Link
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Recording Link :
                    <Link target="_blank" href={url}>
                      {url}
                    </Link>
                    <p className="mt-2">Passcode : NO PASSCODE</p>
                  </Typography>
                </Box>
              </Modal>
            </div>

            <div className="border p-3 text-dark border rounded">
              <p className="h5 text-wrap text-secondary">{session}</p>

              <p className="h5">{session1}</p>

              <p className="h6 text-dark">Contents:</p>
              <p className="h5">{content}</p>
              <p className="h6 text-dark">Pre-read:</p>

              <p className="h5">{preread}</p>
            </div>

            <div className={actclass}>
              <p className="h3" style={{ color: "#4b0dba" }}>
                Activities:
              </p>
              <p className="h5">{activity}</p>
            </div>
            <div></div>
          </div>

          <div className="d-flex flex-column">
            <div className="border p-3">
              <h5 className="bg-light border p-3">Sessions Roadmap</h5>
              <div>{getClass()}</div>
            </div>
            <div className="border mt-3 rounded">
              <h5 className="p-3">Additional Sessions</h5>

              <div>{getAddclassdet()}</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default Home;
