import React, { useEffect, useState } from 'react';
import './PopUp.scss';
// import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { useParams } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import CreditCard from './CreditCard';

export default function PopUp(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  const { name, photo, price } = props.doctor;
  const { submit, setSubmit } = props;
  const { success, setSuccess } = props;
  const { id } = useParams();
  const [date, setDate] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [period, setPeriod] = useState({});
  const [reservation, setReservation] = useState({
    psychologist_id: id,
  });
  const [error, setError] = useState({});

  function handleChange(e) {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    // try {
    // let submit = await axios.post(
    //   `http://localhost:3001/api/doctors/reservation`,
    //   reservation,
    //   { withCredentials: true }
    // );
    setSuccess(true);
    // } catch (err) {
    //   console.error(err);
    // }
    console.log('banana');
  }

  function handleValidation(form) {
    const errors = {};
    if (!form.date) {
      errors.date = '請選擇日期';
    }
    if (!form.period) {
      errors.period = '請選擇時段';
    }
    return errors;
  }
  useEffect(() => {
    const fetchDate = async () => {
      let res = await axios.get(
        `http://localhost:3001/api/doctors/${id}/reservation`
      );
      setDate(res.data);
    };
    fetchDate();
  }, [id]);

  useEffect(() => {
    const fetchPeriod = async () => {
      let res = await axios.get(
        `http://localhost:3001/api/doctors/${id}/reservation/${selectedDate}`
      );
      setPeriod(res.data);
    };
    fetchPeriod();
  }, [selectedDate, id]);

  if (success) {
    return (
      <section className={props.popUp}>
        <div className="dr-form-container">
          <ImCross className="cross" onClick={props.handlePopUp} />
          <h2 className="dr-pop-up delay1" style={{ 'margin-bottom': '50px' }}>
            -預約完成-
          </h2>
          <p>預約的心理師: {name}</p>
          <p>預約日期: {reservation.date}</p>
          <p>
            時段:
            {reservation.period === '1'
              ? '上午( 10:00 ~ 12:00)'
              : '下午 ( 14:00 ~ 16:00)'}
          </p>
          <NavLink
            to="/product"
            onClick={() => {
              document.body.style.overflow = 'initial';
            }}
          >
            <button className="complete">逛逛我們的減壓小物</button>
          </NavLink>
        </div>
      </section>
    );
  }

  if (submit && user) {
    return (
      <section className={props.popUp}>
        <div className="dr-form-container">
          <ImCross className="cross" onClick={props.handlePopUp} />
          <div clasName="dr-form-login-alert">
            <NavLink
              to={'/auth'}
              onClick={() => {
                document.body.style.overflow = 'initial';
              }}
            >
              <h2 className="dr-pop-up delay1">請先登入</h2>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  if (submit && !user) {
    return (
      <section className={props.popUp}>
        <div className="dr-form-container">
          <ImCross className="cross" onClick={props.handlePopUp} />
          <h2 className="dr-pop-up delay1">付款資訊</h2>
          <CreditCard handleSubmit={handleSubmit} />
        </div>
      </section>
    );
  }

  return (
    <section className={props.popUp}>
      <div className="dr-form-container">
        <ImCross className="cross" onClick={props.handlePopUp} />
        <h2>預約諮詢</h2>
        <img
          className="form-photo"
          src={`http://localhost:3001/${photo}`}
          alt="doctor"
        ></img>
        <p className="formName">{name}心理師</p>
        <form className="form">
          <label for="price" className="form-label dr-pop-up delay1">
            價格
          </label>
          <input
            id="price"
            className="form-panel dr-pop-up delay1"
            value={`${price}元/次`}
            readOnly
          ></input>
          <label for="date" className="form-label dr-pop-up delay2">
            日期
          </label>
          <select
            id="date"
            name="date"
            className="form-panel dr-pop-up delay2"
            value={reservation.date}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              handleChange(e);
            }}
          >
            <option disabled selected>
              請選擇日期
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
            時段
          </label>
          <select
            id="period"
            name="period"
            className="form-panel dr-pop-up delay3"
            value={reservation.period}
            onChange={handleChange}
          >
            <option disabled selected>
              請選擇時段
            </option>
            {period.length > 0 &&
              period.map((opt) => {
                return (
                  <option value={opt.period}>
                    {opt.period === 1 ? '上午' : '下午'}
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
            placeholder="請說說您的情況："
            value={reservation.info}
            onChange={handleChange}
          />
          <input
            type="button"
            value="確定預約"
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
