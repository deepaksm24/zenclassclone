import React, { useEffect, useState } from "react";
import Top from "../top";
import { GetPlaced } from "../../api/users";
import { Hideloading, ShowLoading } from "../../redux/loadersSlice";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Placement() {
  const [students = [], setStudents] = useState([]);

  const dispatch = useDispatch();
  const getPlacement = async () => {
    try {
      dispatch(ShowLoading());

      const response = await GetPlaced();

      dispatch(Hideloading());

      setStudents(response.data);
    } catch (error) {
      dispatch(Hideloading);
    }
  };
  useEffect(() => {
    getPlacement();
  }, []);

  const getplacementdetails = () => {
    return (
      <div className="d-flex flex-fill justify-content-start">
        {students.map((student, index) => (
          <div className="flex-fill">
            <div className="card m-2 p-3">
              <div className="card-body">
                <h5 className="card-title">
                  {student.name}
                  <AccountCircleIcon
                    className="ml-5"
                    color="disabled"
                    sx={{ fontSize: 40 }}
                  />
                </h5>
                <h5 className="card-title">{student.batch}</h5>

                <p className="card-text">COMPANY : {student.company}</p>
                <p className="card-text">Current CTC : {student.ctc}</p>
                <p className="card-text">Placed Through : {student.placed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <Top pos="Placement" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>{getplacementdetails()}</div>
    </div>
  );
}

export default Placement;
