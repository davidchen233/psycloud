import React, { useEffect, useState } from 'react';
import './PopUp.scss';
// import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { useParams } from 'react-router';
import axios from 'axios';
import { concatSeries } from 'async';
import moment from 'moment';

export default function PopUp(props) {
  let user = JSON.parse(localStorage.getItem('user'));
  const { name, photo, price } = props.doctor;
  const { id } = useParams();
  const [date, setDate] = useState({});
  const [period, setPeriod] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [reservation, setReservation] = useState({
    psychologist_id: id,
  });
  function handleChange(e) {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('banana');
    // let submit = await axios.post(`http://localhost:3001/api/`, reservation);
  }
  console.log(reservation);

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
        <form className="form" onSubmit={handleSubmit}>
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
          <label for="period" className="form-label dr-pop-up delay3">
            時段
          </label>
          <select
            id="period"
            name="period"
            className="form-panel dr-pop-up delay3"
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
          <textarea
            name="info"
            className="form-panel dr-pop-up delay4"
            placeholder="請說說您的情況："
            onChange={handleChange}
          ></textarea>
          <input
            type="submit"
            value="確定預約"
            className="submit dr-pop-up delay5"
          ></input>
        </form>
      </div>
    </section>
  );
}
