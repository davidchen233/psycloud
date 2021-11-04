import './personal.css';
import ProfileSideNav from './ProfileSideNav';
import Banner from './tempImg/banner.png';

const Personal = () => {
  return (
    <ProfileSideNav>
      <div className="personal-banner">
        <img src={Banner} alt="" />
      </div>
    </ProfileSideNav>
  );
};

export default Personal;
