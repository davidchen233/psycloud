import Banner from './Banner';
import Test from './Test';
import Doctor from './Doctor';
import './home.css';
const Home = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <Test />
        <Doctor />
      </div>
    </>
  );
};

export default Home;
