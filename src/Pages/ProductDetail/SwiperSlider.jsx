import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import classes from "./SwiperSlider.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// data
import { imageslider } from "../../Components/Shop/Products/productsList2";

const SwiperSlider = ({ colorItemId, productId }) => {
  //   states

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={classes.mySwiper2}
      >
        {imageslider[productId].map((item) => (
          <div style={{ backgroundColor: "red" }} key={item.id}>
            {item[colorItemId]?.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </div>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={classes.mySwiper}
      >
        {imageslider[productId].map((item) => (
          <div style={{ backgroundColor: "blue" }} key={item.id}>
            {item[colorItemId]?.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
