import './test.css';
import { Link } from 'react-router-dom';
const Test = () => {
  return (
    <section className="h-section test">
      <div>
        <h2>-- 壓力檢測 --</h2>
        <p>
          壓力看不見摸不著，卻無時無刻都影響著您的身心健康、人際關係、甚至工作品質。
          <br />
          工作壓力太高或太低都會讓人效率降低，長期處於高壓下則讓人自律神經失調，身體機能受損。
          <br />
          現在就花五分鐘關照自己，測試最近的壓力指數跟壓力源，是否在理想範圍內吧!
        </p>
        <Link to="/test" className="button-md d-block mx-auto text-center">
          進入檢測
        </Link>
      </div>
    </section>
  );
};

export default Test;
