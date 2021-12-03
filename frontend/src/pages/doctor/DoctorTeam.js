import React from 'react';
import Card from './Card';
import './DoctorTeam.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DoctorTeam() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    AOS.init({ offset: 200, duration: 1500, once: true, easing: 'ease-in' });
    let fetch = async () => {
      let res = await axios.get('http://localhost:3001/api/doctors');
      setDoctors(res.data);
    };
    fetch();
  }, []);

  const [showBtn, setShowBtn] = useState(true);
  const [cancel, setCancel] = useState(false);
  const [search, setSearch] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    let fetch = async () => {
      let res = await axios.get(
        `http://localhost:3001/api/doctors/search?key=${search}`
      );
      setDoctors(res.data);
    };
    fetch();
  }
  function handleReturn() {
    setSearch('');
    setCancel(!cancel);
    let fetch = async () => {
      let res = await axios.get('http://localhost:3001/api/doctors');
      setDoctors(res.data);
    };
    fetch();
  }

  return (
    <>
      <section className="dr-team-page">
        <h3 className="team-title">-心理師團隊-</h3>
        <RiSearchLine
          class="dr-show-btn"
          onClick={() => {
            setShowBtn(!showBtn);
          }}
        />
        <section className="control-section">
          <section className={showBtn ? 'search-hide' : 'search-show'}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                class="search-input"
                value={search}
                onChange={(e) => {
                  setCancel(false);
                  setSearch(e.target.value);
                }}
              ></input>
              {!cancel ? (
                <input
                  type="submit"
                  className="search-btn"
                  onClick={() => {
                    setCancel(!cancel);
                  }}
                  value="依專長搜尋"
                ></input>
              ) : (
                <input
                  type="submit"
                  className="search-btn"
                  onClick={() => {
                    handleReturn();
                  }}
                  value="返回列表"
                ></input>
              )}
            </form>
          </section>
          <section className="search-section">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                class="search-input"
                value={search}
                onChange={(e) => {
                  setCancel(false);
                  setSearch(e.target.value);
                }}
              ></input>
              {!cancel ? (
                <input
                  type="submit"
                  className="search-btn"
                  onClick={() => {
                    if (search) {
                      setCancel(!cancel);
                    }
                  }}
                  value="依專長搜尋"
                ></input>
              ) : (
                <input
                  type="submit"
                  className="search-btn"
                  onClick={() => {
                    handleReturn();
                  }}
                  value="返回列表"
                ></input>
              )}
            </form>
          </section>
          <Link to={`/test`}>
            <button className="search-btn round">壓力檢測</button>
          </Link>
        </section>
        <section className="team-container">
          {doctors.length === 0 ? (
            <div
              onClick={handleReturn}
              className="return-alert"
              style={{ cursor: 'pointer' }}
            >
              <h2>查無相符心理師...</h2>
              <h2>請試試看其他關鍵字</h2>
              <br />
              <h2>點此即可返回...</h2>
            </div>
          ) : (
            doctors.map((doctor) => <Card {...doctor} />)
          )}
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
