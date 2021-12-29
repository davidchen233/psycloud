import { useState, useEffect } from 'react';
import Checkpageform from './Checkpageform';
import { Link } from 'react-router-dom';
import './checkpage.css';

const Checkpage = () => {
  return (
    <>
      <div className="container">
        <div className="CP-title">
          <h3>-訂單確認-</h3>
        </div>
        <div className="CP-div mx-auto">
          <Checkpageform />
        </div>
      </div>
    </>
  );
};

export default Checkpage;
