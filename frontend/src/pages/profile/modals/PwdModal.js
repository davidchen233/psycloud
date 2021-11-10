import './formModal.css';
import { GrClose } from 'react-icons/gr';
import { Form, Row, Col, Button } from 'react-bootstrap';
const PwdModal = ({ closePwdModal }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={closePwdModal} />
        <h3 className="mb-4">編輯資料</h3>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              請輸入舊密碼 :
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              請輸入新密碼 :
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              再次輸入新密碼 :
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              onClick={closePwdModal}
              className="me-4"
            >
              取消
            </Button>
            <Button variant="primary" type="submit">
              確認
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PwdModal;
