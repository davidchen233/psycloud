import { useState } from 'react';
import './psychologist.css';

import PsyInfo from './pyschologist/PsyInfo';
import Calendar from './pyschologist/Calendar';

const Psychologist = () => {
  const [activeItem, setActiveItem] = useState('心理師資料');
  const handleClick = (e) => {
    let currentItem = e.currentTarget.innerText;
    if (currentItem !== activeItem) {
      setActiveItem(currentItem);
    }
  };

  const switchView = () => {
    switch (activeItem) {
      case '心理師資料':
        return <PsyInfo />;
      case '我的排程':
        return <Calendar />;
      case '我的諮詢':
        return 'Still Working on it';
      default:
        return <PsyInfo />;
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
      <div className="doctorContent">{switchView()}</div>
    </>
  );
};

export default Psychologist;