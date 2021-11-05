import './formModal.css';
import { GrClose } from 'react-icons/gr';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
const PersonalInfoForm = ({ closePersonalModal }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={closePersonalModal} />
        <h3 className="mb-4">編輯資料</h3>
        <Form>
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
