import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, message } from "antd";
import { useDispatch } from "react-redux";
import { ShowLoading, Hideloading } from "../../redux/loadersSlice";
// import { Addmovie, updateMovie } from "../../api/movies";
import moment from "moment";

function Tasks() {
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

  //   if(selectedMovie){
  //     selectedMovie.releasedate= moment(selectedMovie.releasedate).format("YYYY-MM-DD");

  //   }
  const onFinish = async (values) => {};

  return (
    <div>
      <div className="d-flex justify-content-center gap-3 mt-5 h-100">
        <Button type="primary" onClick={showModal}>
         Task details Add
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Add Task Details"
        footer={null}
        width={700}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Email" name="email">
                <input className="w-100" type="email" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label="Contents" name="contents">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
           
            <Col span={8}>
              <Form.Item label="Batch" name="batch">
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

export default Tasks;
