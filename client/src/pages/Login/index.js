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
    password: Yup.string()
      .required(" Password is required")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        " Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const onFinish = async (v) => {
    try {
      //dispatch(ShowLoading());
      // alert(v);
      const response = await Loginuser(v);
      dispatch(Hideloading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);

        window.location.href = "/";
      } else {
        message.error(response.message);
      }
      dispatch(Hideloading());

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
                    const value = (JSON.stringify(values));
                    onFinish(value);

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
                          <span className="label-style">Email</span>
                          {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Example : johndoe@mail.com"
                            className="form-control inp_text"
                            id="email"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.email && <ErrorOutlineIcon />}
                            {errors.email && touched.email && errors.email}
                          </p>
                          {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                          <span className="label-style">Password</span>
                          <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Your Password"
                            className="form-control"
                          />
                          {/* If validation is not passed show errors */}
                          <p className="error">
                            {errors.email && <ErrorOutlineIcon />}
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </p>
                          {/* Click on submit button to submit the form */}
                          <button
                            style={{ backgroundColor: "#4b0dba" }}
                            className="login-btn col-md-12 btn btn-primary btn-lg btn-block mt-2 mb-4"
                            type="submit"
                          >
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
              <div className="row forgot">
                <Link to="/forgot-password">
                  <div className="forget">Forgot Password?</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 text-right pr-0">
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
