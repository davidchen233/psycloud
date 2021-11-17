import { useState, useEffect } from 'react';

const RelieveItem = () => {
  return (
    <div>
      <div className="justify-content-center align-items-center">
        <div className="RelieveImg mb-3">
          <img src={require('./images/relieveStress/7.jpg').default} alt="" />
        </div>
        <div>
          <h5>Push pop bubble</h5>
          <h4>$299</h4>
        </div>
      </div>
    </div>
  );
};

export default RelieveItem;
