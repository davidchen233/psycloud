import { useState, useEffect } from 'react';

const DecorsItem = () => {
  return (
    <div>
      <div className="justify-content-center align-items-center">
        <div className="DecorsImg mb-3">
          <img src={require('./images/decors/21.png').default} alt="" />
        </div>
        <div>
          <h5>松鼠愛森林</h5>
          <h4>$420</h4>
        </div>
      </div>
    </div>
  );
};

export default DecorsItem;
