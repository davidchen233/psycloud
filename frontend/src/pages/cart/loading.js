import './loading.css';
import React from 'react';

const Loading = () => {
  return (
    <div className="loader-wrapper">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <h2>請稍後...</h2>
      </div>
    </div>
  );
};

export default Loading;
