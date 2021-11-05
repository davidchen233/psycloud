import { useState } from 'react';
import './psychologist.css';

const Psychologist = () => {
  const [activeItem, setActiveItem] = useState('心理師資料');
  const handleClick = (e) => {
    let currentItem = e.currentTarget.innerText;
    if (currentItem !== activeItem) {
      setActiveItem(currentItem);
    }
  };
  return (
    <>
      <div className="profile-heading">
        <h2>心理師專區</h2>
      </div>
      <nav className="psyNav d-flex justify-content-between">
        <div></div>
        <ul className="d-flex mt-100">
          <li
            className={activeItem === '心理師資料' ? 'active' : ''}
            onClick={handleClick}
          >
            心理師資料
          </li>
          <li
            className={activeItem === '我的排程' ? 'active' : ''}
            onClick={handleClick}
          >
            我的排程
          </li>
          <li
            className={activeItem === '我的諮詢' ? 'active' : ''}
            onClick={handleClick}
          >
            我的諮詢
          </li>
        </ul>
      </nav>
      <div className="doctorContent"></div>
    </>
  );
};

export default Psychologist;
