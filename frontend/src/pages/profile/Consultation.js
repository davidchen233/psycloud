import { useState, useRef, useEffect } from 'react';
import './consultation.css';
import { FaVideo } from 'react-icons/fa';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { PERIOD } from '../../config/status';
import Avatar from './tempImg/avatar.jpg';
import axios from 'axios';
import moment from 'moment';
import creatRoom from '../videoChat/CreateRoom';
import { Link } from 'react-router-dom';
import { number } from 'prop-types';

const Consultation = () => {
  const [swiperPosition, setSwiperPosition] = useState(0);
  const [rightDisabled, setRightDisabled] = useState('');
  const [user, setUser] = useState('');
  const [list, setList] = useState([]);
  const swipeLengthRef = useRef();
  const swiperWrapperRef = useRef();

  useEffect(() => {
    const fetchList = async () => {
      let result = await axios.get(
        `http://localhost:3001/api/reservations/getUser/getList`,
        { withCredentials: true }
      );
      setList(result.data);
    };
    fetchList();
  }, []);

  console.log(list);

  // TODO: 替換掉假資料
  const [consultations, setConsultations] = useState([
    {
      id: 1,
      psychologist: '鴨子王',
      date: '1998-10-30',
      period: 1,
    },
  ]);

  return (
    <>
      <div className="profile-heading">
        <h2>我的預約</h2>
      </div>
      <div className="myConsult-swipe" ref={swiperWrapperRef}>
        <div
          ref={swipeLengthRef}
          className="myConsult-wrapper"
          style={{ left: swiperPosition }}
        >
          {list.map((item) => {
            return (
              <div className="myConsult-card" key={item.id}>
                <h4>預約資訊</h4>
                <div className="consult-avatarBx">
                  <img src={`http://localhost:3001/${item.photo}`} alt="" />
                </div>
                <h5>{item.name} 心理師</h5>
                <p>預約日期: {moment(item.date).format('YYYY-MM-DD')}</p>
                <p>預約時段: {PERIOD[item.period]}</p>
                <Link
                  to={{
                    pathname: '/videoChat/room/',
                    state: { roomID: item.id },
                  }}
                >
                  <button>開始通話</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className={`swipeBtn ${swiperPosition === 0 ? 'disabled' : ''}`}
          onClick={() => {
            setRightDisabled('');
            if (swiperPosition + 400 >= 0) {
              setSwiperPosition(0);
            } else {
              setSwiperPosition(swiperPosition + 400);
            }
          }}
        >
          <BsArrowLeftCircle size="36" color="#565656" />
        </button>
        <button
          className={`swipeBtn ${rightDisabled}`}
          onClick={() => {
            if (
              swipeLengthRef.current.offsetWidth + (swiperPosition - 400) <=
              swiperWrapperRef.current.offsetWidth
            ) {
              setSwiperPosition(
                -swipeLengthRef.current.offsetWidth +
                  swiperWrapperRef.current.offsetWidth
              );
              setRightDisabled('disabled');
            } else {
              setSwiperPosition(swiperPosition - 400);
            }
          }}
        >
          <BsArrowRightCircle size="36" color="#565656" />
        </button>
      </div>
    </>
  );
};

export default Consultation;
