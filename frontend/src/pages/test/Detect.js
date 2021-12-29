import './detect.css';
// import { link} from 'react-router-dom';
import React from 'react';
import cloud from './cloud/cloud3.jpg';
// import { Link } from 'react-router';
import { NavLink } from 'react-router-dom';

const detect = () => {
  return (
    <>
      <div className="container">
        <div className="row mx-auto maxwid">
          <div className="col-md-12 mt-3">
            <h2 className="text-center">-壓力檢測-</h2>
          </div>
          <div className="col-md-12 text-center mt-3">
            <div className="card outermost px-3">
              <div className="text-box align-items-center">
                <div className="mx-auto mt-3 mt-md-5">
                  {/* <div class="inbox"> */}
                  <p>
                    促進身心健康的第一步，就是了解自己的身體狀況，
                    {/* <br>快來測試自己的壓力指數，是否在健康範圍內! */}
                  </p>
                  <p>快來測試自己的壓力指數，是否在健康範圍內!</p>
                  <div className="mt-5">
                    <p className="cocolor">(共13題)</p>
                    {/* <link to="/process">開始檢測test</link> */}
                    <NavLink
                      to="/process"
                      className="mt-0 mb-3 startbt del-line"
                      type="button"
                    >
                      開始檢測
                    </NavLink>
                  </div>
                  <img src={cloud} alt="雲朵" className="first-cloud" />
                  {/* </div>                                 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default detect;
