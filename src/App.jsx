import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ShoppingCard from "./ShoppingCard";
import ShoppingLogo from "./Layout/Header/ShoppingLogo";

// import Login from "./Layout/Header/Login";

// components
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail/index";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

// style
import "./Layout/Header/global.css";
import "./App.css";

const App = () => {
  console.log("app:");
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product-category/:productid/:slug" element={<Shop />} />
          <Route
            path="/product-detail/:productid/:slug"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import "./styles.css";

// // import required modules
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import img1 from "./assets/image/photo_2019-12-11_16-39-53.jpg";
import Login from "./Pages/Login/index";
import Search from "./Pages/Shop/Search";

// const App = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{
//           swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//         }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default App;
