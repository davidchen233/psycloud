import { useState, useRef } from 'react';
import './consultation.css';
import { FaVideo } from 'react-icons/fa';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import Avatar from './tempImg/avatar.jpg';

const Consultation = () => {
  const [swiperPosition, setSwiperPosition] = useState(0);
  const [rightDisabled, setRightDisabled] = useState('');
  const swipeLengthRef = useRef();
  const swiperWrapperRef = useRef();
  const handleSwipe = () => {
    console.log('position', swiperPosition);
    console.log('卡片盒寬度', swipeLengthRef.current.offsetWidth);
    console.log('slider寬度', swiperWrapperRef.current.offsetWidth);
  };
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
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>

          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
          <div className="myConsult-card">
            <h4>預約資訊</h4>
            <div className="consult-avatarBx">
              <img src={Avatar} alt="" />
            </div>
            <h5>心理師: 鴨子王</h5>
            <p>預約日期: 2021/8/9</p>
            <p>預約時段: 上午(10:00 - 12:00)</p>
            <p>價格: 2000/次</p>
            <p>狀態: 未開啟</p>
            <button>
              <FaVideo size="22" color="#333" />
            </button>
          </div>
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
            handleSwipe();
          }}
        >
          <BsArrowLeftCircle size="36" color="#565656" />
        </button>
        <button
          className={`swipeBtn ${rightDisabled}`}
          onClick={() => {
            if (
              swipeLengthRef.current.offsetWidth + (swiperPosition - 400) <
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
            handleSwipe();
          }}
        >
          <BsArrowRightCircle size="36" color="#565656" />
        </button>
      </div>
    </>
  );
};

export default Consultation;
