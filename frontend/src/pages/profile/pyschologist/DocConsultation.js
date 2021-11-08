import './docConsultation.css';
import { FaVideo } from 'react-icons/fa';
import Avatar from '../tempImg/avatar.jpg';

const DocConsultation = () => {
  return (
    <>
      <div className="patientList">
        <div className="patient d-flex align-items-center mb-4">
          <div className="patientCard d-flex align-items-center">
            <div className="patientAvatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="patientContent">
              <h5>預約者 : 神奇寶貝</h5>
              <div className="d-flex justify-content-between">
                <p>預約日期 : 2021/08/09</p>
                <p className="ms-4">預約時段 : 上午 (10:00 - 12:00)</p>
              </div>
            </div>
            <button>查看自述</button>
          </div>
          <button className="enterRoomBtn">
            <FaVideo size="22" color="#333" />
          </button>
        </div>
        <div className="patient d-flex align-items-center mb-4">
          <div className="patientCard d-flex align-items-center">
            <div className="patientAvatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="patientContent">
              <h5>預約者 : 神奇寶貝</h5>
              <div className="d-flex justify-content-between">
                <p>預約日期 : 2021/08/09</p>
                <p className="ms-4">預約時段 : 上午 (10:00 - 12:00)</p>
              </div>
            </div>
            <button>查看自述</button>
          </div>
          <button className="enterRoomBtn">
            <FaVideo size="22" color="#333" />
          </button>
        </div>
        <div className="patient d-flex align-items-center mb-4">
          <div className="patientCard d-flex align-items-center">
            <div className="patientAvatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="patientContent">
              <h5>預約者 : 神奇寶貝</h5>
              <div className="d-flex justify-content-between">
                <p>預約日期 : 2021/08/09</p>
                <p className="ms-4">預約時段 : 上午 (10:00 - 12:00)</p>
              </div>
            </div>
            <button>查看自述</button>
          </div>
          <button className="enterRoomBtn">
            <FaVideo size="22" color="#333" />
          </button>
        </div>
        <div className="patient d-flex align-items-center mb-4">
          <div className="patientCard d-flex align-items-center">
            <div className="patientAvatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="patientContent">
              <h5>預約者 : 神奇寶貝</h5>
              <div className="d-flex justify-content-between">
                <p>預約日期 : 2021/08/09</p>
                <p className="ms-4">預約時段 : 上午 (10:00 - 12:00)</p>
              </div>
            </div>
            <button>查看自述</button>
          </div>
          <button className="enterRoomBtn">
            <FaVideo size="22" color="#333" />
          </button>
        </div>
        <div className="patient d-flex align-items-center mb-4">
          <div className="patientCard d-flex align-items-center">
            <div className="patientAvatar">
              <img src={Avatar} alt="" />
            </div>
            <div className="patientContent">
              <h5>預約者 : 神奇寶貝</h5>
              <div className="d-flex justify-content-between">
                <p>預約日期 : 2021/08/09</p>
                <p className="ms-4">預約時段 : 上午 (10:00 - 12:00)</p>
              </div>
            </div>
            <button>查看自述</button>
          </div>
          <button className="enterRoomBtn">
            <FaVideo size="22" color="#333" />
          </button>
        </div>
      </div>
    </>
  );
};

export default DocConsultation;
