import Banner from './Banner';
import Clouds from './Clouds';
import Test from './Test';
import Doctor from './Doctor';
import Products from './Products';
import './home.css';
const Home = () => {
  return (
    <>
      <Clouds />
      <Banner />
      <div className="container">
        <Test />
        <Doctor />
        <Products />
      </div>
    </>
  );
};

export default Home;
