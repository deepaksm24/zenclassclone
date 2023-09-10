import React, { useEffect } from "react";
import { Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";
import { Registeruser } from "../../api/users";
import { useDispatch } from "react-redux";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";

const Register = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (v) => {
    try {
      dispatch(ShowLoading());
      
      const response = await Registeruser(v);

      dispatch(Hideloading());

    

      if (response.success === "false") {

        message.error("User Already exists");
       
      } else {
        message.success("User Created");
        form.resetFields();
        navigate("/admin");
      
      }
    } catch (error) {
      dispatch(Hideloading());
      console.log(error);

      message.error(error.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center flex-column bd-highlight "
      style={{ height: "110vh" }}
    >
      <div className="cards p-4">
        <div className="justify-content-center">
          <h1>Zenclass-ADMIN</h1>
          <h2>Add Student</h2>
        </div>
        <Form 
        form={form}
        layout="vertical" onFinish={onFinish} className="mB-1">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input Student Name" }]}
          >
            <input className="w-100" type="text" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input Student Mail ID" },
            ]}
          >
            <input className="w-100" type="email" />
          </Form.Item>
          <Form.Item
            label="PhoneNo"
            name="phoneno"
            rules={[
              { required: true, message: "Please input Student Phone no" },
            ]}
          >
            <input className="w-100" type="text" />
          </Form.Item>
          <Form.Item
            label="Course"
            name="course"
            className="w-100"
            rules={[{ required: true, message: "Please input course " }]}
          >
            <select className="w-100">
              <option value="">Select Course</option>
              <option value="FSD-MERN">FSD-MERN</option>
              <option value="DATASCIENCE">DATASCIENCE</option>
              <option value="FSD-ANGULAR">FSD-ANGULAR</option>
              <option value="UI">UI</option>
            </select>
          </Form.Item>
          <Form.Item
            label="Batch"
            name="batch"
            rules={[{ required: true, message: "Please input Student Batch" }]}
          >
            <input className="w-100" type="text" />
          </Form.Item>

          <p>default password: <span className="text-success">Guvi@12345</span></p>
          <Button type="primary" htmlType="submit" className="w-100 mt-2 mb-4">
            <h6>REGISTER</h6>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
