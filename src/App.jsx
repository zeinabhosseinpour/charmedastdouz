import { BrowserRouter, Route, Routes } from "react-router-dom";

// components
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail/index";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login/index";
import Search from "./Pages/Shop/Search";
import DiscountsOffers from "./Pages/discountsOffers";
// style
import "./Layout/Header/global.css";
import "./App.css";
import Category from "./Pages/Category";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product-category/:productid/:slug" element={<Shop />} />
          <Route
            path="/product-detail/:productid/:slug"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/discounts-offers" element={<DiscountsOffers />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

//
