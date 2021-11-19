import { useState } from 'react';
import './docConsultation.css';
import { FaVideo } from 'react-icons/fa';
import { PERIOD } from '../../../config/status';
import Avatar from '../tempImg/avatar.jpg';

const DocConsultation = () => {
  const [docConsultaions, setDocConsultations] = useState([
    { id: 1, name: '神奇寶貝', date: '2021-05-05', period: 1 },
  ]);

  return (
    <>
      <div className="patientList">
        {docConsultaions.map((docConsultaion) => {
          return (
            <div
              className="patient d-flex align-items-center mb-4"
              key={docConsultaion.id}
            >
              <div className="patientCard d-flex align-items-center">
                <div className="patientAvatar">
                  <img src={Avatar} alt="" />
                </div>

                <div className="patientContent">
                  <h5>預約者 : {docConsultaion.name}</h5>
                  <div className="d-flex justify-content-between">
                    <p>預約日期 : {docConsultaion.date}</p>
                    <p className="ms-4">
                      預約時段 : {PERIOD[docConsultaion.period]}
                    </p>
                  </div>
                </div>
                <button>查看自述</button>
              </div>
              <button className="enterRoomBtn">
                <FaVideo size="22" color="#333" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DocConsultation;
