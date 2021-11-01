// 使用套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 組合用元件
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 頁面元件

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <MainContent>
        {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
        <ScrollToTop>
          <Switch></Switch>
        </ScrollToTop>
      </MainContent>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
