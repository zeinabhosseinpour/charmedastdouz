// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//  style
import "./BanerSlider.css";
import "./global.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// data

import { banerImages } from "../../../Components/Shop/Products/productsList2";

const BanerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banerImages.map((image) => (
          <div key={image.id}>
            <SwiperSlide key={image.id}>
              <img src={image.img} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};
export default BanerSlider;
