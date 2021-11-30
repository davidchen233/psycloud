import React from 'react';
import './PopUp.scss';
// import { useState } from 'react';
import { ImCross } from 'react-icons/im';

export default function PopUp(props) {
  const { name, photo, price } = props.doctor;
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
          <select id="date" className="form-panel dr-pop-up delay2">
            <option>1</option>
          </select>
          <label for="sections" className="form-label dr-pop-up delay3">
            時段
          </label>
          <select id="sections" className="form-panel dr-pop-up delay3">
            <option>1</option>
          </select>
          <textarea
            className="form-panel dr-pop-up delay4"
            placeholder="請說說您的情況："
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
