import { useState, useRef } from 'react';
import './consultation.css';
import { FaVideo } from 'react-icons/fa';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { PERIOD } from '../../config/status';
import Avatar from './tempImg/avatar.jpg';

const Consultation = () => {
  const [swiperPosition, setSwiperPosition] = useState(0);
  const [rightDisabled, setRightDisabled] = useState('');
  const swipeLengthRef = useRef();
  const swiperWrapperRef = useRef();

  // TODO: 替換掉假資料
  const [consultations, setConsultations] = useState([
    {
      id: 1,
      psychologist: '鴨子王',
      date: '1998-10-30',
      period: 1,
      price: 2000,
      status: '0',
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
          {consultations.map((consultation) => {
            return (
              <div className="myConsult-card" key={consultation.id}>
                <h4>預約資訊</h4>
                <div className="consult-avatarBx">
                  <img src={Avatar} alt="" />
                </div>
                <h5>心理師: {consultation.psychologist}</h5>
                <p>預約日期: {consultation.date}</p>
                <p>預約時段: {PERIOD[consultation.period]}</p>
                <p>價格: {consultation.price}/次</p>
                <p>狀態: {consultation.status}</p>
                <button>
                  <FaVideo size="22" color="#333" />
                </button>
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
