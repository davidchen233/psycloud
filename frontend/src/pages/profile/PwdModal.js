import './formModal.css';
import { GrClose } from 'react-icons/gr';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
const PwdModal = ({ closePwdModal }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={closePwdModal} />
        <h3 className="mb-4">編輯資料</h3>
        <Form>
          <FloatingLabel
            controlId="floatingPassword"
            label="請輸入舊密碼"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="請輸入新密碼"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="請再次輸入新密碼"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
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
