import './banner.css';
import Video from './bannerVideo.mp4';
import Ink1 from './ink1.mov';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <video src={Video} type="video/mp4" autoPlay muted loop></video>
      <video src={Ink1} type="video/mov" autoPlay muted loop></video>
      <div className="content">
        <h3>從心出發</h3>
        <p>
          我們一定不要忘記，即使處境無望，在劫難逃，我們仍可以從中找到生命的意義。在任何特定的環境中，人們還有一種最後的自由，就是選擇自己的態度；人類最後的自由就是選擇自己的態度。
          <br />
          -- 弗蘭克爾
        </p>
        <div className="d-flex justify-content-between">
          <div></div>
          <Link to="/doctor" className="button-md">
            馬上諮詢
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
