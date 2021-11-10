import React from 'react';
import Card from './Card';
import './DoctorTeam.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function DoctorTeam() {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 1500, once: true, easing: 'ease-in' });
  }, []);

  const [showBtn, setShowBtn] = useState(true);

  return (
    <>
      <section className="dr-team-page">
        <h3 className="team-title">-心理師團隊-</h3>
        <RiSearchLine
          class="dr-show-btn"
          onClick={() => {
            setShowBtn(!showBtn);
            console.log('click');
          }}
        />
        <section className="control-section">
          <section className={showBtn ? 'search-hide' : 'search-show'}>
            <input type="text" class="search-input"></input>
            <input
              type="submit"
              className="search-btn"
              value="依專長搜尋"
            ></input>
          </section>
          <section className="search-section">
            <input type="text" class="search-input"></input>
            <input
              type="submit"
              className="search-btn"
              value="依專長搜尋"
            ></input>
          </section>
          <button className="search-btn round">壓力檢測</button>
        </section>
        <section className="team-container">
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
          <div data-aos="fade">
            <Card />
          </div>
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

export default DoctorTeam;
