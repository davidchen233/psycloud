import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './test.css';
import axios from 'axios';
import { TEST_RESULT } from '../../config/test-result';
import { API_URL } from '../../config/config';

const Test = () => {
  // TODO: fetch test result from user (TEST_RESULT[0])
  const [result, setResult] = useState({});

  useEffect(async () => {
    let res = await axios.get(
      `http://localhost:3001/api/users/userTestResult`,
      {
        withCredentials: true,
      }
    );
    setResult(TEST_RESULT[res.data.pressure_level]);
  }, []);

  return (
    <>
      <div className="profile-heading">
        <h2>檢測結果</h2>
      </div>
      <div className="testResult">
        <h4 className="mb-3">
          壓力程度: <span className="ms-2 fw-bold">{result.pressure}</span>
        </h4>
        <p>- {result.info}</p>
        <ol className="advices">
          {result.advice.map((v, i) => {
            return <li key={i}>{v}</li>;
          })}
        </ol>
        <ul className="adv-links">
          {result.links.map((v, i) => {
            return (
              <li key={i}>
                <Link to={v.link}>{v.linkName}</Link> :
                <span className="ms-3">{v.linkInfo}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Test;
