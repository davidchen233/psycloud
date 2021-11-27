import './result.css';
// import { NavLink } from 'react-router-dom';

const TestPsychologist = () => {
  return (
    <>
      {/* <NavLink to="/"> */}

      <div className="card w-100 outermost ">
        <div className=" belarge">
          <div className="mx-auto m-3 person-img" />
          {/* <img class="card-img-top" src="" alt="Card image cap"> */}
          <div className="process-card-body">
            <p className="card-text">
              A醫生
              <br />
              <span className="profession">心理師</span>
            </p>
            <div className="person-line" />
            <p className="mt-3 gr">專長:情緒壓力/家庭關係</p>
          </div>
        </div>
      </div>

      {/* </NavLink> */}
    </>
  );
};
export default TestPsychologist;
