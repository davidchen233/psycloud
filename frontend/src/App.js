// 使用套件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 頁面元件
import Profile from './pages/profile/Profile';
import Home from './pages/home/Home';
import ProductPage from './pages/product/ProductPage';
import StuffedToys from './pages/product/StuffedToys';
import Decors from './pages/product/Decors';
import Relieve from './pages/product/Relieve';
import Cart from './pages/cart/Cart';
import Checkpage from './pages/cart/Checkpage';
import ProductDetails from './pages/product/ProductDetails';

// 組合用元件
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 頁面元件

function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
        <ScrollToTop>
          <Switch>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route path="/StuffedToys">
              <StuffedToys />
            </Route>
            <Route path="/ProductDetails">
              <ProductDetails />
            </Route>
            <Route path="/Decors">
              <Decors />
            </Route>
            <Route path="/Relieve">
              <Relieve />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/Checkpage">
              <Checkpage />
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
