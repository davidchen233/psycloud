import Photo from './image.jpg';
import './card.css';
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <NavLink to="/doctor">
      <div className="card">
        <div className="cardContent">
          <div className="imgBx">
            <div className="avatar">
              <img src={Photo} alt="" />
            </div>
          </div>
          <div className="contentBx">
            <h3>呂佩霖醫師</h3>
            <p>專長: 情緒壓力/家庭關係</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
