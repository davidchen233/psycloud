// 使用套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 頁面元件
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import Doctor from './pages/doctor/DoctorTeam';
import Test from './pages/test/Detect';
import Process from './pages/test/Process';
import Result from './pages/test/Result';
// 組合用元件
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 頁面元件

import Auth from './pages/auth/Auth';

function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
        <ScrollToTop>
          <Switch>
            <Route path="/doctor">
              <Doctor />
            </Route>
            <Route path="/process">
              <Process />
            </Route>
            <Route path="/Result">
              <Result />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ScrollToTop>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;
