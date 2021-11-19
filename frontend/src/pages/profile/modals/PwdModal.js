import { useState } from 'react';
import './formModal.css';
import { GrClose } from 'react-icons/gr';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const PwdModal = ({ togglePwdModal }) => {
  const [inputs, setInputs] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  function handleChange(e) {
    let newInputs = { ...inputs, [e.target.name]: e.target.value };
    setInputs(newInputs);
  }

  const [inputErrors, setInputErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  function handleFormInvalid(e) {
    e.preventDefault();
    const newInputErrors = {
      ...inputErrors,
      [e.target.name]: e.target.validationMessage,
    };
    setInputErrors(newInputErrors);
  }

  function handleFormChange(e) {
    const newInputErrors = {
      ...inputErrors,
      [e.target.name]: '',
    };
    setInputErrors(newInputErrors);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData.get('newPassword'));
    if (formData.get('newPassword') !== formData.get('confirmNewPassword')) {
      const newInputErrors = {
        ...inputErrors,
        confirmNewPassword: '密碼與確認密碼欄位不相符',
      };
      setInputErrors(newInputErrors);
      return;
    }
    try {
      let res = axios.await('http://localhost:3000/aaa');
    } catch (e) {
      console.log('handleSubmit error: ', e);
    }
  }

  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={togglePwdModal} />
        <h3 className="mb-4">編輯資料</h3>
        <Form
          onSubmit={handleSubmit}
          onInvalid={handleFormInvalid}
          onChange={handleFormChange}
        >
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              請輸入舊密碼 :
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                name="oldPassword"
                value={inputs.oldPassword}
                onChange={handleChange}
                required
                minLength="8"
              />
            </Col>
            {inputErrors.oldPassword !== '' && (
              <div className="profileModalError">{inputErrors.oldPassword}</div>
            )}
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              請輸入新密碼 :
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                name="newPassword"
                value={inputs.newPassword}
                onChange={handleChange}
                minLength="8"
                required
              />
            </Col>
            {inputErrors.newPassword !== '' && (
              <div className="profileModalError">{inputErrors.newPassword}</div>
            )}
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="4">
              再次輸入新密碼 :
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                name="confirmNewPassword"
                value={inputs.confirmNewPassword}
                onChange={handleChange}
                required
              />
            </Col>
            {inputErrors.confirmNewPassword !== '' && (
              <div className="profileModalError">
                {inputErrors.confirmNewPassword}
              </div>
            )}
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              onClick={togglePwdModal}
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
