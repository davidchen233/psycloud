import { useState, useEffect } from 'react';
import './StuffedToys.css';

const StuffedToysItem = () => {
  return (
    <div>
      <div className="justify-content-center align-items-center">
        <div className="StuffedImg mb-3">
          <img src="/sources/bear.jpg" alt="" />
        </div>
        <div>
          <h5>柴犬捏捏樂</h5>
          <h4>$290</h4>
        </div>
      </div>
    </div>
  );
};

export default StuffedToysItem;
