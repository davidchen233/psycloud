import Cloud from './cloud.png';
import './clouds.css';

const Clouds = () => {
  return (
    <section className="backgroundClouds">
      <div className="cloud x1">
        <img src={Cloud} alt="" />
      </div>
      <div className="cloud x2">
        <img src={Cloud} alt="" />
      </div>
      <div className="cloud x3">
        <img src={Cloud} alt="" />
      </div>
      <div className="cloud x4">
        <img src={Cloud} alt="" />
      </div>
    </section>
  );
};

export default Clouds;
