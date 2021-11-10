import './formModal.css';
import { GrClose } from 'react-icons/gr';
import { Form, Row, Col, Button } from 'react-bootstrap';
const PersonalInfoForm = ({ closePersonalModal }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={closePersonalModal} />
        <h3 className="mb-4">編輯資料</h3>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              姓名 :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="請輸入姓名" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="請輸入 Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              生日 :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="date" placeholder="請輸入姓出生年月日" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              電話 :
            </Form.Label>
            <Col sm="10">
              <Form.Control type="phone" placeholder="請輸入電話號碼" />
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              type="submit"
              className="me-4"
              onClick={closePersonalModal}
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

export default PersonalInfoForm;
