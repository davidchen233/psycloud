import React from 'react';
import './PopUp.scss';
// import { useState } from 'react';
import { ImCross } from 'react-icons/im';

export default function PopUp(props) {
  return (
    <section className={props.popUp}>
      <div className="dr-form-container">
        <ImCross className="cross" onClick={props.handlePopUp} />
        <h2>預約諮詢</h2>
        <img className="form-photo" src={props.Photo} alt="doctor"></img>
        <p className="formName">劉嘉文心理師</p>
        <form className="form">
          <label className="form-label dr-pop-up delay1">價格</label>
          <input
            className="form-panel dr-pop-up delay1"
            value="2000元/次"
            readOnly
          ></input>
          <label className="form-label dr-pop-up delay2">日期</label>
          <select className="form-panel dr-pop-up delay2">
            <option>1</option>
          </select>
          <label className="form-label dr-pop-up delay3">時段</label>
          <select className="form-panel dr-pop-up delay3">
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
