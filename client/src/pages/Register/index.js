import React, { useEffect } from "react";
import { Button, Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Loginuser } from "../../api/users";
import { useDispatch } from "react-redux";
import logo from "../../../src/images.png";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required(" Email is  required")
      .email(` Enter a valid Email`),
  });

  const onFinish = async (v) => {
    try {
      dispatch(ShowLoading());
      const response = await Loginuser(v);
      dispatch(Hideloading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);

        window.location.href = "/";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(Hideloading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container-custom mr-0 pr-0">
      <div className="row m-0">
        <div className="col-md-8">
          <div className="row d-flex">
            <div className="logo">
              <img src={logo} className="imagelogo" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <div className="col-md-6">
                <Formik
                  validationSchema={schema}
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <div className="login">
                      <div className="form">
                        {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                        <form noValidate onSubmit={handleSubmit}>
                          <span className="label-style">Enter Registered Email</span>
                          {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Eg: John@abc.com"
                            className="form-Inputs inp_text"
                            id="email"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error mt-2">
                            {errors.email && <ErrorOutlineIcon />}
                            {errors.email && touched.email && errors.email}
                          </p>
                        
                          <button
                            style={{ backgroundColor: "#4b0dba" }}
                            className="login-btn col-md-12 btn btn-primary btn-lg btn-block mt-2 mb-4"
                            type="submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <img
            src="https://www.zenclass.in/static/media/login_img.cbed4040.png"
            className="img-class"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
