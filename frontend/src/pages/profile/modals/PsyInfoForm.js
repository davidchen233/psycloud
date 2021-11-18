import { GrClose } from 'react-icons/gr';
import './formModal.css';

const PsyInfoForm = ({ togglePsyInfoForm }) => {
  return (
    <div className="formModal-mask">
      <div className="formModal">
        <GrClose size="30" className="close" onClick={togglePsyInfoForm} />
        <h3 className="mb-4">檢視</h3>
        <p>
          TODO:雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的
          <br />
          <br />
          TODO:雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的雖然測驗結果為輕度，找心理師聊聊也不失為一個不錯的
        </p>
      </div>
    </div>
  );
};

export default PsyInfoForm;
