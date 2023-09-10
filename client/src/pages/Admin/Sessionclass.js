import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";
import moment from "moment";
import { Classadd, GetClass } from "../../api/users";

function Sessionclass() {
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
      <div className="d-flex justify-content-center gap-3 mt-5 h-100">
        <Button type="primary" onClick={showModal}>
          Main Class Sessions
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
              <Form.Item label="Name" name="name">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Contents" name="contents">
                <textarea className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Preread" name="preread">
                <textarea className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Class no" name="classno">
                <input className="w-100" type="number" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Date" name="additionaldate" className="w-100 ">
                <input className="w-100" type="date" />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item label="Time" name="Time" className="w-100">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={24
            }>
              <Form.Item label="Batch" name="batch">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Activity" name="activity">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>


            <Col span={24}>
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

export default Sessionclass;
