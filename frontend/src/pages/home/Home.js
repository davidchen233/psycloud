import Banner from './Banner';
import Clouds from './Clouds';
import Test from './Test';
import Doctor from './Doctor';
import Products from './Products';
import './home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    let fetch = async () => {
      let res = await axios.get('http://localhost:3001/api/doctors');
      setDoctors(res.data);
    };
    fetch();
  }, []);

  return (
    <>
      <Clouds />
      <Banner />
      <div className="container">
        <Test />
        <Doctor doctors={doctors} />
        <Products />
      </div>
    </>
  );
};

export default Home;
