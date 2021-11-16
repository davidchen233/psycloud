// 使用套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 頁面元件
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Doctor from './pages/doctor/DoctorTeam';

// 組合用元件
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

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
