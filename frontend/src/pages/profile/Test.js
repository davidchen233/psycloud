import { Link } from 'react-router-dom';
import './test.css';
import { TEST_RESULT } from '../../config/test-result';

const Test = () => {
  // TODO: fetch test result from user
  const result = TEST_RESULT[0];
  console.log(result);

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
        <ul className="links">
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
