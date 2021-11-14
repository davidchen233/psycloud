import { GrClose } from 'react-icons/gr';
import { Button } from 'react-bootstrap';
import './formModal.css';

const EditPsyInfoForm = ({ toggleEditPsyInfoForm }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={toggleEditPsyInfoForm} />
        <h3 className="mb-4">編輯</h3>
        <form>
          <textarea
            class="form-control mb-3"
            rows="8"
            style={{ resize: 'none' }}
          ></textarea>
          <div className="d-flex justify-content-end">
            <Button
              variant="outline-primary"
              type="submit"
              className="me-4"
              onClick={toggleEditPsyInfoForm}
            >
              取消
            </Button>
            <Button variant="primary" type="submit">
              確認
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPsyInfoForm;
