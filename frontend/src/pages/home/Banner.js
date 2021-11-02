import './banner.css';
import Video from './bannerVideo.mp4';
import Ink from './ink.mov';

const Banner = () => {
  return (
    <section>
      <video src={Video} type="video/mp4" autoPlay muted loop></video>
      <video src={Ink} type="video/mov" autoPlay muted loop></video>
    </section>
  );
};

export default Banner;
