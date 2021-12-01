import { useState, useEffect } from 'react';
import './StuffedToys.css';

const StuffedToysItem = ({ image, name, price }) => {
  return (
    <div className="justify-content-center align-items-center">
      <div className="StuffedImg mb-3">
        <img src={image} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

export default StuffedToysItem;
