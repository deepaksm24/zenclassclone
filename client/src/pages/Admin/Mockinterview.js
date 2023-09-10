import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";
import moment from "moment";
import { GetAllmock, Mockadd } from "../../api/users";

function MockInterview() {
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

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());

      const response = await Mockadd(values);

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
      <div className="d-flex justify-content-center gap-3 mt-5 h-100">
        <Button type="primary" onClick={showModal}>
          Open Mock Interview set details
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Mock Interview"
        footer={null}
        width={800}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label="Name" name="name">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Interviewer Name" name="interviewername">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Attended" name="attended" className="w-100">
                <select className="w-50">
                  <option value="">yes/no</option>
                  <option value="yes">YES</option>
                  <option value="no">NO</option>
                </select>
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                label="Interview Date"
                name="interviewdate"
                className="w-75"
              >
                <input className="w-75" type="date" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="COMMENTS" name="comment" className="w-100">
                <textarea className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Logical-Score"
                name="logicalscore"
                className="w-100"
              >
                <input className="w-100" type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="React-Score"
                name="reactscore"
                className="w-100"
              >
                <input className="w-100" type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="MySQL-Score"
                name="mysqlscore"
                className="w-100"
              >
                <input className="w-100" type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="MongoDB-Score"
                name="mongodbscore"
                className="w-100"
              >
                <input className="w-100" type="number" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="NodeJS-Score"
                name="nodejsscore"
                className="w-100"
              >
                <input className="w-100" type="number" />
              </Form.Item>
            </Col>

            <Col span={16}>
              <Form.Item label="Recording URL" name="url">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
          </Row>
          <div className="d-flex justify-content-center gap-3">
            <Button type="primary" htmlType="submit" success className="w-50">
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default MockInterview;
