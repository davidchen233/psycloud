import React, { useEffect, useState, useRef } from 'react';
import './PopUp.scss';
// import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { useParams } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import CreditCard from './CreditCard';

export default function PopUp(props) {
  const { name, photo, price } = props.doctor;
  const { submit, setSubmit } = props;
  const { success, setSuccess } = props;
  const { reservation, setReservation } = props;
  const { id } = useParams();
  const [user, setUser] = useState('');
  const [date, setDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [period, setPeriod] = useState({});
  const [error, setError] = useState({});
  const dateRef = useRef(null);
  const periodRef = useRef(null);

  function handleChange(e) {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  }
  const fetcher = () => {
    const fetchDate = async () => {
      let res = await axios.get(
        `http://localhost:3001/api/doctors/${id}/reservation`
      );
      setDate(res.data);
    };
    const fetchUser = async () => {
      let result = await axios.get(
        `http://localhost:3001/api/doctors/currentUser`,
        { withCredentials: true }
      );
      setUser(result.data.id);
    };
    fetchDate();
    fetchUser();
    setReservation({ psychologist_id: id });
  };

  const fetchPeriod = async () => {
    let res = await axios.get(
      `http://localhost:3001/api/doctors/${id}/reservation/${selectedDate}`
    );
    setPeriod(res.data);
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  const handleSubmit = async (e) => {
    try {
      let submit = await axios.post(
        `http://localhost:3001/api/doctors/reservation`,
        reservation,
        { withCredentials: true }
      );
      setSuccess(true);
      setReservation({});
      setPeriod({});
      fetcher();
    } catch (err) {
      console.error(err);
    }
  };

  function handleValidation(form) {
    const errors = {};
    if (!form.date) {
      errors.date = '???????????????';
    }
    if (!form.period) {
      errors.period = '???????????????';
    }
    return errors;
  }

  useEffect(() => {
    fetchPeriod();
  }, [selectedDate, id]);

  if (success) {
    return (
      <section className={props.popUp}>
        <div className="dr-form-container">
          <ImCross className="cross" onClick={props.handlePopUp} />
          <h2 className="dr-pop-up delay1" style={{ 'margin-bottom': '50px' }}>
            -????????????-
          </h2>
          <p>??????????????????: {name}</p>
          <p>????????????: {dateRef.current}</p>
          <p>
            ??????:
            {periodRef.current === '1'
              ? '??????( 10:00 ~ 12:00)'
              : '?????? ( 14:00 ~ 16:00)'}
          </p>
          <NavLink
            to="/product"
            onClick={() => {
              document.body.style.overflow = 'initial';
            }}
          >
            <button className="complete">???????????????????????????</button>
          </NavLink>
        </div>
      </section>
    );
  }

  if (user === '') {
    return (
      <section className={props.popUp}>
        <div className="dr-form-container">
          <ImCross className="cross" onClick={props.handlePopUp} />
          <div className="dr-form-login-alert">
            <NavLink
              to={'/auth'}
              onClick={() => {
                document.body.style.overflow = 'initial';
              }}
            >
              <h2 className="dr-pop-up delay1">????????????</h2>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  if (submit && user) {
    return (
      <section className={props.popUp}>
        <div className="dr-form-container">
          <ImCross className="cross" onClick={props.handlePopUp} />
          <h2 className="dr-pop-up delay1">????????????</h2>
          <CreditCard handleSubmit={handleSubmit} />
        </div>
      </section>
    );
  }

  return (
    <section className={props.popUp}>
      <div className="dr-form-container">
        <ImCross className="cross" onClick={props.handlePopUp} />
        <h2>????????????</h2>
        <img
          className="form-photo"
          src={`http://localhost:3001/${photo}`}
          alt="doctor"
        ></img>
        <p className="formName">{name}?????????</p>
        <form className="form">
          <label for="price" className="form-label dr-pop-up delay1">
            ??????
          </label>
          <input
            id="price"
            className="form-panel dr-pop-up delay1"
            value={`${price}???/???`}
            readOnly
          ></input>
          <label for="date" className="form-label dr-pop-up delay2">
            ??????
          </label>
          <select
            id="date"
            name="date"
            className="form-panel dr-pop-up delay2"
            value={reservation.date}
            onClick={() => {
              fetchPeriod();
            }}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              handleChange(e);
              dateRef.current = e.target.value;
            }}
          >
            <option disabled selected>
              ???????????????
            </option>
            {date.length > 0 &&
              date.map((opt) => {
                return (
                  <option value={moment(opt.date).format('YYYY-MM-DD')}>
                    {moment(opt.date).format('YYYY-MM-DD')}
                  </option>
                );
              })}
          </select>
          <div className="dr-pop-up delay2 z-index">
            <p className="dr-error">{error.date}</p>
          </div>
          <label for="period" className="form-label dr-pop-up delay3">
            ??????
          </label>
          <select
            id="period"
            name="period"
            className="form-panel dr-pop-up delay3"
            value={reservation.period}
            onChange={(e) => {
              periodRef.current = e.target.value;
              handleChange(e);
            }}
          >
            <option disabled selected>
              ???????????????
            </option>
            {period.length > 0 &&
              period.map((opt) => {
                return (
                  <option value={opt.period}>
                    {opt.period === 1 ? '??????' : '??????'}
                  </option>
                );
              })}
          </select>
          <div className="dr-pop-up delay3 z-index">
            <p className="dr-error">{error.period}</p>
          </div>
          <textarea
            name="info"
            className="form-panel dr-pop-up delay4"
            placeholder="????????????????????????"
            value={reservation.info}
            onChange={handleChange}
          />
          <input
            type="button"
            value="????????????"
            className="submit dr-pop-up delay5"
            onClick={async () => {
              setError(handleValidation(reservation));
              let fail = Object.keys(handleValidation(reservation)).length;
              if (!fail) {
                setSubmit(true);
              }
            }}
          />
        </form>
      </div>
    </section>
  );
}
