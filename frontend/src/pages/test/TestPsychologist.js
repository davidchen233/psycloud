import './result.css';
import { NavLink } from 'react-router-dom';
import { PRESSURE_TYPES } from '../../config/status';
import SwiperCore, { EffectCoverflow } from 'swiper';
import { API_URL } from '../../config/config';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TestPsychologist = ({ id, name, expertise, photo }) => {
  const [pType, setPtype] = useState([]);
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/doctors/${id}/expertise`);
    setPtype(res.data);
  }, []);
  return (
    <>
      <NavLink to={`/doctor/${id}`} className="text-decoration-none">
        <div className="card w-100 outermost ">
          <div className=" belarge">
            <div className="mx-auto m-3 person-img">
              <img className="card-img-top" src={photo} alt="Cardcap" />
            </div>

            <div className="process-card-body">
              <p className="card-text">
                {name}醫師
                <br />
                <span className="profession">心理師</span>
              </p>
              <div className="person-line" />
              <p className="mt-3 gr">
                專長:{' '}
                {`${PRESSURE_TYPES[pType[0]]}/${PRESSURE_TYPES[pType[1]]}`}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};
export default TestPsychologist;
