import { useState, useEffect } from 'react';

const RelieveItem = ({ image, name, price }) => {
  return (
    <div>
      <div className="justify-content-center align-items-center">
        <div className="RelieveImg mb-3">
          <img src={image} alt="" />
        </div>
        <div>
          <h5>{name}</h5>
          <h4>${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default RelieveItem;
