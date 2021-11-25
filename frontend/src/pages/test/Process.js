import './process.css';
import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { API_URL } from '../../config/config';
import { useHistory } from 'react-router-dom';

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

  const now = 7.7;

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
                      <div className="card-body d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            1.最近是否經常感到緊張，覺得工作總是做不完?
                            <br />
                            <div className="d-flex justify-content-around mt-5">
                              <span>
                                <input
                                  type="radio"
                                  name="q1"
                                  value="true"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                                />
                                <label className="cocolor" htmlFor>
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
                                  value="true"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                                />
                                <label className="cocolor" htmlFor>
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
                    style={{ width: '10%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {now / 2}%
                  </div>
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
                      <div className="card-body d-flex align-items-center">
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
                                />
                                <label className="cocolor" htmlFor>
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
                                />
                                <label className="cocolor" htmlFor>
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
                                  value="true"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q4"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                    style={{ width: '15%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    15%
                  </div>
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
                      <div className="card-body d-flex align-items-center">
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q5"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q6"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                    style={{ width: '30%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    30%
                  </div>
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
                      <div className="card-body d-flex align-items-center">
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q7"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q8"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                    style={{ width: '45%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    45%
                  </div>
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
                      <div className="card-body d-flex align-items-center">
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q9"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q10"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                    style={{ width: '60%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    60%
                  </div>
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
                      <div className="card-body d-flex align-items-center">
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q11"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
                                  是
                                </label>
                                <br />
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="q12"
                                  value="false"
                                  onChange={handleScoreChange}
                                />
                                <label className="cocolor" htmlFor>
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
                    style={{ width: '75%' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    75%
                  </div>
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
                      <div className="card-body d-flex align-items-center">
                        <div className="mx-auto">
                          <div>
                            13.您最近的困擾主要是來自哪個方面呢?
                            <br />
                            <div className="justify-content-around mt-3">
                              <input
                                type="radio"
                                name="q13"
                                value="1"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor>
                                情緒管理
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="2"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor>
                                家庭關係
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="3"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor>
                                人際關係
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="4"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor>
                                疾病照顧
                              </label>
                              <br />
                              <input
                                type="radio"
                                name="q13"
                                value="5"
                                onChange={handlePressureTypeChange}
                              />
                              <label className="cocolor" htmlFor>
                                職涯發展
                              </label>
                              <br />
                            </div>
                            {/* <button type="button" className="mt-3" style={{backgroundColor: '#4797FF', color: 'white', borderRadius: '7px', border: 'none', width: '85px'}}>送出</button> */}
                            <button className="mt-3 del-line toresult">
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
                    style={{ width: 'calc(12/13*100%)' }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {now * '12'}%
                  </div>
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
