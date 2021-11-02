import { NavLink } from 'react-router-dom';
const Doctor = () => {
  return (
    <section className="test">
      <div>
        <h2>-- 預約心理師 --</h2>
        <NavLink to="/test" className="seeMore d-block mx-auto text-center">
          See More
        </NavLink>
      </div>
    </section>
  );
};

export default Doctor;
