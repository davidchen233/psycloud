import React from 'react';
import Photo from './unnamed.jpg';
import './Card.scss';

export default function card() {
  return (
    <div className="recommend-card float">
      <img className="doc-photo" src={Photo} alt="doctor"></img>
      <h2>劉嘉文</h2>
      <p>
        焦慮症狀減輕與緩解
        <br />
        兒童青少年情緒行為問題
        <br />
        成人嚴重憂鬱、焦慮症狀
      </p>
      <button>查看詳情</button>
    </div>
  );
}
