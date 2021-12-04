import React from 'react';
// import Calender from './fullcalendar.png';
import './doctor.scss';
import PopUp from './PopUp';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SliderSection from './SliderSection';
import Calendar from './Calendar';

function Doctor() {
  const [popUp, setPopUp] = useState('hidden-dr');
  const [doctor, setDoctor] = useState({});
  const [recommend, setRecommend] = useState({});
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [reservation, setReservation] = useState({});
  const [user, setUser] = useState('');
  const { id } = useParams();

  function handlePopUp() {
    if (popUp === 'hidden-dr') {
      setPopUp('form-mask-dr');
      document.body.style.overflow = 'hidden';
    } else {
      setPopUp('hidden-dr');
      document.body.style.overflow = 'initial';
      setSubmit(false);
      setSuccess(false);
    }
  }
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1200, once: true, easing: 'ease-in' });
    const fetchData = async () => {
      let result = await axios.get(`http://localhost:3001/api/doctors/${id}`);
      setDoctor(result.data[0]);
    };
    const fetchRecommend = async () => {
      let res = await axios.get(
        `http://localhost:3001/api/doctors/${id}/recommend`
      );
      setRecommend(res.data);
    };
    const fetchUser = async () => {
      let result = await axios.get(
        `http://localhost:3001/api/doctors/currentUser`,
        { withCredentials: true }
      );
      setUser(result.data.id);
    };
    fetchData();
    fetchRecommend();
    fetchUser();
  }, [id]);

  const { name, photo, summary, experience, expertise, education } = doctor;
  return (
    <>
      <PopUp
        handlePopUp={handlePopUp}
        popUp={popUp}
        doctor={doctor}
        submit={submit}
        setSubmit={setSubmit}
        success={success}
        setSuccess={setSuccess}
        reservation={reservation}
        setReservation={setReservation}
        user={user}
      />
      <section class="dr-portfolio">
        <section className="summary dr-press dr-fade-in dr-fade1">
          <div className="photo-div">
            <img
              className="photo"
              src={`http://localhost:3001/${photo}`}
              alt="doctor"
            ></img>
          </div>
          <div className="summary-div">
            <div className="name">
              <h2>{name} 心理師</h2>
              <button className="reserve-now" onClick={handlePopUp}>
                立即預約
              </button>
            </div>
            <h3>簡歷/Summary</h3>
            <p>{summary}</p>
          </div>
        </section>
        <section className="expertise dr-press dr-fade-in dr-fade2">
          <h3>經歷（摘錄）／ Experience：</h3>
          <div>
            {experience &&
              experience.split(/\r\n/g).map((line, i) => {
                return (
                  <p key={i} className="dr-descriptive">
                    {line}
                  </p>
                );
              })}
          </div>
        </section>
        <section className="cv dr-press dr-fade-in dr-fade3">
          <h3>學歷/Education</h3>
          <p>{education}</p>
          <h3>專長/Expertise</h3>
          <div>
            {expertise &&
              expertise.split(/\r\n/g).map((line, i) => {
                return (
                  <p key={i} className="dr-descriptive">
                    {line}
                  </p>
                );
              })}
          </div>
        </section>
        <section className="calender dr-press dr-fade-in dr-fade4">
          <h3>可預約時間</h3>
          {/* <img src={Calender} alt="calender" className="calender-img"></img> */}
          <Calendar />
        </section>
      </section>
      <section className="dr-recommend-section dr-fade-in dr-fade5">
        <h3>其他相似專長的心理師</h3>
        <SliderSection recommend={recommend} />
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
