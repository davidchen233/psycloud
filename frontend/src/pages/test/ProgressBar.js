import './result.css';

const ProgressBar = ({ done }) => {
  return (
    <div className="mt-3">
      <div className="progress ">
        <div
          className="progress-bar progress-bar-striped"
          role="progressbar"
          // style={{ width: '0%' }}
          // calc(1/7*100%)
          style={{ width: '{ done }' }}
          aria-valuenow={10}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
