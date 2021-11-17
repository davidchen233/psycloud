import { GrClose } from 'react-icons/gr';
import './formModal.css';

const EditPsyInfoForm = ({ closeModal }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={closeModal} />
        <h3 className="mb-4">編輯</h3>
        <div>
          <textarea
            class="form-control"
            rows="8"
            style={{ resize: 'none' }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default EditPsyInfoForm;
