import './process.css';
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { API_URL } from '../../config/config';
import { useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const Process = () => {
  const [score, setScore] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
  });
  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const [pressureType, setPressureType] = useState('');
  const handleScoreChange = (e) => {
    const updatedScore = {
      ...score,
      [e.target.name]: e.target.value,
    };
    setScore(updatedScore);
    console.log(score);
  };
  const handlePressureTypeChange = (e) => {
    setPressureType(e.target.value);
  };

  let history = useHistory();

  const checkValue = () => {
    if (
      score.q1 === '' ||
      score.q2 === '' ||
      score.q3 === '' ||
      score.q4 === '' ||
      score.q5 === '' ||
      score.q6 === '' ||
      score.q7 === '' ||
      score.q8 === '' ||
      score.q9 === '' ||
      score.q10 === '' ||
      score.q11 === '' ||
      score.q12 === '' ||
      score.q13 === ''
    ) {
      alert('有題目未填寫完成');
    }
  };
  async function handleSubmit(e) {
    e.preventDefault();
    let scoreObj = Object.values(score);
    console.log(scoreObj);
    let scoreTotal = 0;
    for (let i = 0; i < scoreObj.length; i++) {
      if (scoreObj[i] === 'true') {
        scoreTotal++;
      }
    }
    let result;
    if (scoreTotal <= 3) {
      result = 0;
    } else if (scoreTotal >= 4 && scoreTotal <= 5) {
      result = 1;
    } else if (scoreTotal >= 6 && scoreTotal <= 8) {
      result = 2;
    } else {
      result = 3;
    }
    let testResult = {
      user_id: user.id,
      pressure_type: +pressureType,
      pressure_level: result,
      now: new Date(),
    };
    console.log(testResult);

    let res = await axios.post(`${API_URL}/tests/result`, testResult);
    console.log(res);
    history.push('/Result');
  }

  return (
    <>
      <form name="test" onSubmit={handleSubmit}>
        <Carousel wrap={false} interval={null} indicators={false}>
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto maxwid">
                <div className="col-md-12 text-center mt-3">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            1.最近是否經常感到緊張，覺得工作總是做不完?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  id="q1-t"
                                  name="q1"
                                  value="true"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q1-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q1"
                                  value="false"
                                  onChange={handleScoreChange}
                                  id="q1-f"
                                />
                                <label className="cocolor" htmlFor="q1-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                            <hr />
                          </div>
                          <div>
                            2.最近是否老是睡不好，常常失眠或睡眠品質不佳?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q2"
                                  id="q2-t"
                                  value="true"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q2-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q2"
                                  value="false"
                                  onChange={handleScoreChange}
                                  id="q2-f"
                                />
                                <label className="cocolor" htmlFor="q2-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: '0%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* p2 */}
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto maxwid">
                <div className="col-md-12 text-center mt-3">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            3.最近是否經常有情緒低落、焦慮、煩躁的情況?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q3"
                                  value="true"
                                  onChange={handleScoreChange}
                                  required
                                  id="q3-t"
                                />
                                <label className="cocolor" htmlFor="q3-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q3"
                                  value="false"
                                  onChange={handleScoreChange}
                                  id="q3-f"
                                />
                                <label className="cocolor" htmlFor="q3-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                            <hr />
                          </div>
                          <div>
                            4.最近是否經常忘東忘西、變得很健忘?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q4"
                                  id="q4-t"
                                  value="true"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q4-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q4"
                                  id="q4-f"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q4-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: 'calc(1/7*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* p3 */}
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto maxwid">
                <div className="col-md-12 text-center mt-3">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            5.最近是否經常覺得胃口不好? 或胃口特別好?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q5"
                                  value="true"
                                  id="q5-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q5-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q5"
                                  value="false"
                                  id="q5-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q5-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                            <hr />
                          </div>
                          <div>
                            6.最近六個月內是否生病不只一次了?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q6"
                                  value="true"
                                  id="q6-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q6-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q6"
                                  value="false"
                                  id="q6-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q6-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: 'calc(2/7*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* p4 */}
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto maxwid">
                <div className="col-md-12 text-center mt-3">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            7.最近是否經常覺得很累，假日都在睡覺?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q7"
                                  value="true"
                                  id="q7-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q7-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q7"
                                  value="false"
                                  id="q7-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q7-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                            <hr />
                          </div>
                          <div>
                            8.最近是否經常覺得頭痛、腰酸背痛?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q8"
                                  value="true"
                                  id="q8-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q8-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q8"
                                  value="false"
                                  id="q8-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q8-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: 'calc(3/7*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* p5 */}
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto maxwid">
                <div className="col-md-12 text-center mt-3">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            9.最近是否經常意見和別人不同?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q9"
                                  value="true"
                                  id="q9-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q9-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q9"
                                  value="false"
                                  id="q9-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q9-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                            <hr />
                          </div>
                          <div>
                            10.最近是否注意力經常難以集中?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q10"
                                  value="true"
                                  id="q10-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q10-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q10"
                                  value="false"
                                  id="q10-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q10-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: 'calc(4/7*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* p6 */}
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto maxwid">
                <div className="col-md-12 text-center mt-3">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            11.最近是否經常覺得未來充滿不確定感? 恐懼感?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q11"
                                  value="true"
                                  id="q11-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q11-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q11"
                                  value="false"
                                  id="q11-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q11-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                            <hr />
                          </div>
                          <div>
                            12.有人說你最近氣色不太好嗎?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q12"
                                  value="true"
                                  id="q12-t"
                                  onChange={handleScoreChange}
                                  required
                                />
                                <label className="cocolor" htmlFor="q12-t">
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q12"
                                  value="false"
                                  id="q12-f"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor="q12-f">
                                  否
                                </label>
                                <br />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: 'calc(5/7*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          {/* p7 */}
          <Carousel.Item>
            <div className="container">
              <div className="row mx-auto" style={{ maxWidth: '768px' }}>
                <div className="col-md-12 text-center mt-3 position-relative">
                  <div className="position-relative">
                    <div className="card">
                      <div className="card-box d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            13.您最近的困擾主要是來自哪個方面呢?
                            <br />
                            <div className="justify-content-around mt-3">
                              <input
                                type="radio"
                                name="q13"
                                value="1"
                                id="q13-1"
                                onChange={handlePressureTypeChange}
                                required
                              />
                              <label className="cocolor" htmlFor="q13-1">
                                情緒管理
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="2"
                                id="q13-2"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor="q13-2">
                                家庭關係
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="3"
                                id="q13-3"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor="q13-3">
                                人際關係
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="4"
                                id="q13-4"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor="q13-4">
                                疾病照顧
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="5"
                                id="q13-5"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor="q13-5">
                                職涯發展
                              </label>
                              <br />
                            </div>
                            {/* <button type="button" className="mt-3" style={{backgroundColor: '#4797FF', color: 'white', borderRadius: '7px', border: 'none', width: '85px'}}>送出</button> */}
                            <button
                              className="mt-3 del-line toresult"
                              onClick={checkValue}
                            >
                              送出
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: 'calc(6/7*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </form>
    </>
  );
};

export default Process;
