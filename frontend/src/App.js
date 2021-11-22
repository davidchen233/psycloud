// 使用套件
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';

// 頁面元件
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Test from './pages/test/Detect';
import Process from './pages/test/Process';
import Result from './pages/test/Result';
import Doctor from './pages/doctor/DoctorTeam';
import ProductPage from './pages/product/ProductPage';
import StuffedToys from './pages/product/StuffedToys';
import Decors from './pages/product/Decors';
import Relieve from './pages/product/Relieve';
import Cart from './pages/cart/Cart';
import Checkpage from './pages/cart/Checkpage';
import ProductDetails from './pages/product/ProductDetails';
import Chat from './pages/chatRoom/Chat';

// 組合用元件
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

let user = JSON.parse(localStorage.getItem('user'));
console.log(user);

export const GlobalValues = createContext({
  cartCount: 0,
  setCartCount: () => {},
});

function App() {
  let cartStr = localStorage.getItem('cart');
  let cartObj = cartStr.split(',');
  let cartNum = cartObj.length === 0 ? 0 : cartObj.length - 1;
  const [cartCount, setCartCount] = useState(cartNum);

  return (
    <GlobalValues.Provider
      value={{ cartCount: cartCount, setCartCount: setCartCount }}
    >
      <Router>
        <Header />
        <MainContent>
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Switch>
              <Route path="/auth">
                <Auth />
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
              <Route path="/doctor">
                <Doctor />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/ProductDetails/:productID">
                <ProductDetails />
              </Route>
              <Route path="/StuffedToys">
                <StuffedToys />
              </Route>
              <Route path="/Decors">
                <Decors />
              </Route>
              <Route path="/Relieve">
                <Relieve />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/Checkpage">
                <Checkpage />
              </Route>
              <Route path="/chatRoom">
                <Chat />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>
        <Footer />
      </Router>
    </GlobalValues.Provider>
  );
}

export default App;
