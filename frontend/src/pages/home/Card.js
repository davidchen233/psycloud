import './card.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { API_URL } from '../../config/config';
import { PRESSURE_TYPES } from '../../config/status';

const Card = ({ id, name, expertise, photo }) => {
  const [pType, setPtype] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/doctors/${id}/expertise`);
    setPtype(res.data);
  }, []);
  return (
    <NavLink to={`/doctor/${id}`} className="link-wrapper">
      <div className="d-card">
        <div className="cardContent">
          <div className="imgBx">
            <div className="avatar">
              <img src={photo} alt="" />
            </div>
          </div>
          <div className="contentBx">
            <h3>{name}醫師</h3>
            <p>
              專長: {`${PRESSURE_TYPES[pType[0]]}/${PRESSURE_TYPES[pType[1]]}`}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
