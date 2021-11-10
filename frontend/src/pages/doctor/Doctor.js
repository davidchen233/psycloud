import React from 'react';
import Calender from './fullcalendar.png';
import Photo from './unnamed.jpg';
import './Doctor.scss';
import Card from './Card';
import PopUp from './PopUp';
import { useState } from 'react';
import { useParams } from 'react-router';

function Doctor() {
  const [popUp, setPopUp] = useState('hidden-dr');
  console.log(useParams());

  function handlePopUp() {
    if (popUp === 'hidden-dr') {
      setPopUp('form-mask-dr');
    } else {
      setPopUp('hidden-dr');
    }
  }

  return (
    <>
      <PopUp handlePopUp={handlePopUp} popUp={popUp} Photo={Photo} />
      <section class="dr-portfolio">
        <section className="summary dr-press dr-fade-in dr-fade1">
          <div className="photo-div">
            <img className="photo" src={Photo} alt="doctor"></img>
          </div>
          <div className="summary-div">
            <div className="name">
              <h2>劉嘉文 心理師</h2>
              <button className="reserve-now" onClick={handlePopUp}>
                立即預約
              </button>
            </div>
            <h3>簡歷/Summary</h3>
            <p>
              早期在台灣的醫院專攻兒童心理治療， 同時擅長成人的憂鬱與焦慮症狀，
              曾在多元文化擁有醫院督導的經驗，
              總計超過20年的資歷，目前在本所專攻兒童、家庭、伴侶以及成人焦慮憂鬱。
            </p>
          </div>
        </section>
        <section className="cv press dr-fade-in dr-fade2">
          <h3>學歷/Education</h3>
          <p>成功大學</p>
          <h3>經歷（摘錄）／ Experience：</h3>
          <p>
            大馬興華獨中駐校心理師
            <br />
            吉隆坡台灣學校 輔導主任
            <br />
            台安敦南心智發展中心 臨床心理師
            <br />
            東海大學輔導諮商中心 諮商老師
            <br />
            羅東聖母醫院 臨床心理師
            <br />
            台北醫學附設醫院 精神科臨床心理師
            <br />
          </p>
        </section>
        <section className="expertise press dr-fade-in dr-fade3">
          <h3>專長/Expertise</h3>
          <p>
            精神疾病評估與治療
            <br />
            憂鬱症狀減輕與緩解
            <br />
            焦慮症狀減輕與緩解
            <br />
            兒童青少年情緒行為問題
            <br />
            成人嚴重憂鬱、焦慮症狀
            <br />
            兒童青少年情緒行為障礙
            <br />
            兒童青少年亞斯伯格及其相關症狀
          </p>
        </section>
        <section className="calender press dr-fade-in dr-fade4">
          <h3>可預約時間</h3>
          <img src={Calender} alt="calender" className="calender-img"></img>
        </section>
      </section>
      <section className="dr-recommend-section dr-fade-in dr-fade5">
        <h3>其他相似專長的心理師</h3>
        <section className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </section>
      {/* had to write this to overwrite the home page background... */}
      <style>
        {
          '#root {background: linear-gradient(#c5f0ff50, #ffffda50, #ff9bc050);}'
        }
      </style>
    </>
  );
}

export default Doctor;
