import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";
import moment from "moment";
import { Classadd, GetClass } from "../../api/users";
import Top from "../top";

function Queries() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  const onFinish = async (v) => {
    try {
      dispatch(ShowLoading());
      const response = await Classadd(v);

      dispatch(Hideloading());

      if (response.success === "false") {
        message.error("Failed retry");
      } else {
        message.success("Success");
        handleCancel();
      }
    } catch (error) {
      dispatch(Hideloading());
      console.log(error);

      message.error(error.message);
    }
  };

  return (
    <div>
      <Top pos="Queries" />
      <div className="d-flex justify-content-start gap-3 mt-5 h-100">
        <Button
          onClick={showModal}
          className="h5 border"
          style={{ color: "#4b0dba" }}
        >
          + Create Query
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add Session Class Details"
        footer={null}
        width={700}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Category" name="category">
              <select className="w-100">
              <option value="">---Select Category</option>
              <option value="zenclass">Zen Class Doubt</option>
              <option value="placement">Placement Related</option>
              <option value="coordination">Coordination Related</option>
              <option value="preboot">PreBoot camp related</option>
            </select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Prefered Voice Communication Language"
                name="language"
              >
 <select className="w-100">
              <option value="">---Select Language</option>
              <option value="tamil">Tamil</option>
              <option value="english">English</option>
             
            </select>              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Query Title" name="querytitle">
                <textarea className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Query Description" name="descriptiono">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Date" name="additionaldate" className="w-100 ">
                <input className="w-100" type="date" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Available Time" name="Time" className="w-100">
                <input className="w-100" type="time" />
              </Form.Item>
            </Col>
          </Row>
          <div className="d-flex justify-content-center gap-3">
            <Button type="primary" htmlType="submit" success className="w-50">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Queries;
