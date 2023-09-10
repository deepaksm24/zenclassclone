import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";
// import { Addmovie, updateMovie } from "../../api/movies";
import moment from "moment";
import { Placeadd } from "../../api/users";
import { useNavigate } from "react-router-dom";


function Placement() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

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
      const response = await Placeadd(v);

      dispatch(Hideloading());


      if (response.success === "false") {

        message.error("Failed retry");
       
      } else {
        message.success("Success");
        form.resetFields();
        handleCancel();
        navigate("/admin");
          
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
          Add Placement
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add PLACEMENT"
        footer={null}
        width={700}
      >
        <Form layout="vertical" onFinish={onFinish}
        form={form}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name" name="name">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Batch-Course" name="batch">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
           
            <Col span={12}>
              <Form.Item label="Company" name="company">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="CTC" name="ctc">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col> <Col span={16}>
              <Form.Item label="Placed At" name="placed">
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

export default Placement;
