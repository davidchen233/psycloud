import { useState } from 'react';
import './formModal.css';
import { GrClose } from 'react-icons/gr';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../../config/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const PersonalInfoForm = ({ togglePersonalModal, setShowPersonalModal }) => {
  const MySwal = withReactContent(Swal);
  let user = JSON.parse(localStorage.getItem('user'));

  const [inputs, setInputs] = useState({
    name: user.name,
    birth: user.birth,
  });

  function handleChange(e) {
    let newInputs = { ...inputs, [e.target.name]: e.target.value };
    setInputs(newInputs);
  }

  const [inputErrors, setInputErrors] = useState({
    name: '',
    birth: '',
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
    try {
      let res = await axios.post(`${API_URL}/users/editInfo`, inputs, {
        withCredentials: true,
      });
      let newUser = { ...user };
      newUser.name = inputs.name;
      newUser.birth = inputs.birth;

      localStorage.setItem('user', JSON.stringify(newUser));
      MySwal.fire({ title: res.data.message, icon: 'success' }).then(() => {
        setShowPersonalModal(false);
        window.location.reload();
      });
    } catch (e) {
      console.log('handleSubmit error: ', e);
    }
  }

  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={togglePersonalModal} />
        <h3 className="mb-4">編輯資料</h3>
        <Form
          onSubmit={handleSubmit}
          onChange={handleFormChange}
          onInvalid={handleFormInvalid}
        >
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              姓名 :
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                value={inputs.name}
                name="name"
                onChange={handleChange}
                required
              />
            </Col>
            {inputErrors.name !== '' && (
              <div className="profileModalError">{inputErrors.name}</div>
            )}
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              生日 :
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="date"
                value={inputs.birth}
                name="birth"
                onChange={handleChange}
                required
              />
            </Col>
            {inputErrors.birth !== '' && (
              <div className="profileModalError">{inputErrors.birth}</div>
            )}
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              type="submit"
              className="me-4"
              onClick={togglePersonalModal}
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
