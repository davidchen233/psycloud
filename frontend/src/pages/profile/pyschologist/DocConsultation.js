import { useState, useEffect } from 'react';
import './docConsultation.css';
import { FaVideo } from 'react-icons/fa';
import { PERIOD } from '../../../config/status';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

const DocConsultation = () => {
  const [docConsultaions, setDocConsultations] = useState([
    { id: 1, name: '神奇寶貝', date: '2021-05-05', period: 1 },
  ]);

  const [user, setUser] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      let result = await axios.get(
        `http://localhost:3001/api/reservations/getUser/getPsyList/`,
        { withCredentials: true }
      );
      setList(result.data);
    };
    fetchList();
  }, [user]);

  console.log(list);

  return (
    <>
      <div className="patientList">
        {list.map((item) => {
          return (
            <div
              className="patient d-flex align-items-center mb-4"
              key={item.id}
            >
              <div className="patientCard d-flex align-items-center">
                <div className="patientAvatar">
                  <img src={`http://localhost:3001/${item.avatar}`} alt="" />
                </div>

                <div className="patientContent">
                  <h5>預約者 : {item.name}</h5>
                  <div className="d-flex justify-content-between">
                    <p>預約日期 : {moment(item.date).format('YYYY-MM-DD')}</p>
                    <p className="ms-4">預約時段 : {PERIOD[item.period]}</p>
                  </div>
                </div>
                <Link
                  to={{
                    pathname: '/videoChat/room/',
                    state: { roomID: item.id },
                  }}
                >
                  <button className="enterRoomBtn">
                    <FaVideo size="22" color="#333" />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DocConsultation;
