import React from 'react';
import Photo from './unnamed.jpg';
import './Card.scss';
import { Link } from 'react-router-dom';

export default function card({ id, name, expertise }) {
  return (
    <div data-aos="fade" className="flex-container">
      <div className="recommend-card float">
        <img className="doc-photo" src={Photo} alt="doctor"></img>
        <p className="name">{name}</p>
        <div className="expertise">
          {expertise &&
            expertise.split(/\r\n/g).map((line) => {
              return <p>{line}</p>;
            })}
        </div>
        <Link to={`/doctor/${id}`}>
          <button>查看詳情</button>
        </Link>
      </div>
    </div>
  );
}
