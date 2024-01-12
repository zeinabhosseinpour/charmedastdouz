import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./SwiperSlider.css";
import classes from "./style.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import img1 from "../../assets/image/20220327_113154.jpg";
import img2 from "../../assets/image/20211216_125938.jpg";
import img3 from "../../assets/image/20211231_133356.jpg";
import img4 from "../../assets/image/20220327_121708.jpg";

// component
import {
  image,
  imageslider,
} from "../../Components/Shop/Products/productsList2";

// const SwiperSlider = ({ colorItemId = imageslider[1111] }) => {
//   console.log("swipercoloritemid:", colorItemId);
//   console.log("imageslider[0]:", imageslider[0]);
//   // console.log("propsswiperid:", props.itemId);
//   // console.log("listaxslider:", imageslider[props.itemId]);
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
//         {imageslider[colorItemId].map((image) => (
//           <SwiperSlide key={image}>
//             <img src={image} />
//           </SwiperSlide>
//         ))}

//         {/* <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img4} />
//         </SwiperSlide> */}
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
//         {imageslider[colorItemId].map((image) => (
//           <SwiperSlide key={image}>
//             <img src={image} />
//           </SwiperSlide>
//         ))}
//         {/* <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img4} />
//         </SwiperSlide> */}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperSlider;
import p1 from "../../assets/image/photo_2019-12-11_16-39-53.jpg";
import p2 from "../../assets/image/20211216_125938.jpg";
import p3 from "../../assets/image/20211231_133356.jpg";
import p4 from "../../assets/image/20220327_113154.jpg";
import p5 from "../../assets/image/20220327_115051.jpg";
import p6 from "../../assets/image/20220327_114030.jpg";
import p7 from "../../assets/image/20220327_122745.jpg";
import p8 from "../../assets/image/20220327_122718.jpg";
import p9 from "../../assets/image/20220327_121708.jpg";

const SwiperSlider = ({ colorItemId, productId }) => {
  // productId,
  // colorItemId = image[productId].map((i) => ({ color: i })),
  // { colorItemId = 1111, productId}
  // SwiperSlider.defaultProps = {
  //   111: { 1111: [p3, p4, p7, p9] },
  //   231: { 2311: [p1, p2, p7, p8] },
  // };

  const x = imageslider[productId].map((item) => ({
    value: item[colorItemId],
  }));
  const y = x.map((i) => ({ v: i.value }));
  console.log("yswiper:", y);
  console.log("x:swiper:", x);
  console.log("swipercoloritemid:", colorItemId);
  console.log("swiperproductid:", productId);
  // console.log("imageslider[0]:", imageslider[0]);
  // console.log("propsswiperid:", props.itemId);
  // console.log("listaxslider:", imageslider[props.itemId]);
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
        className="mySwiper2"
      >
        {imageslider[productId].map((item) => (
          <div style={{ height: "100%" }} key={item.id}>
            {item[colorItemId]?.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </div>
        ))}

        {/* <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide> */}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imageslider[productId].map((item) => (
          <div style={{ height: "100%" }} key={item.id}>
            {item[colorItemId]?.map((image) => (
              <SwiperSlide key={image}>
                <img src={image} />
              </SwiperSlide>
            ))}
          </div>
        ))}

        {/* {imageslider[productId].map((item) =>
          item[colorItemId].map((image) => (
            <SwiperSlide key={image}>
              <img src={image} />
            </SwiperSlide>
          ))
        )} */}
        {/* <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

// const SwiperSlider = ({
//   colorItemId = image[productId].map((i) => ({ color: i })),
//   productId,
// }) => {
//   // { colorItemId = 1111, productId}
//   // SwiperSlider.defaultProps = {
//   //   111: { 1111: [p3, p4, p7, p9] },
//   //   231: { 2311: [p1, p2, p7, p8] },
//   // };

//   // const x = imageslider[productId].map((item) => ({
//   //   value: item[colorItemId],
//   // }));
//   // const y = x.map((i) => ({ v: i.value }));
//   // console.log("yswiper:", y);
//   // console.log("x:swiper:", x);
//   console.log("swipercoloritemid:", colorItemId);
//   console.log("swiperproductid:", productId);
//   // console.log("imageslider[0]:", imageslider[0]);
//   // console.log("propsswiperid:", props.itemId);
//   // console.log("listaxslider:", imageslider[props.itemId]);
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
//         {imageslider
//           .filter((item) => item.id === productId)
//           .map((p) => (
//             <div key={p.id}>
//               {p.attributes
//                 .filter((a) => a.id === colorItemId)
//                 .map((i) => (
//                   <div key={i.id}>
//                     {i.images.map((m) => (
//                       <SwiperSlide key={m}>
//                         <img src={m} />
//                       </SwiperSlide>
//                     ))}
//                   </div>
//                 ))}
//             </div>
//           ))}
//         {/* {imageslider[productId].map((item) => (
//           <SwiperSlide key={item}>
//             {item[colorItemId].map((image) => (
//               <img key={image} src={image} />
//             ))}
//           </SwiperSlide>
//         ))} */}

//         {/* <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img4} />
//         </SwiperSlide> */}
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
//         {imageslider
//           .filter((item) => item.id === productId)
//           .map((p) => (
//             <div key={p.id}>
//               {p.attributes
//                 .filter((a) => a.id === colorItemId)
//                 .map((i) => (
//                   <div key={i.id}>
//                     {i.images.map((m) => (
//                       <SwiperSlide key={m}>
//                         <img src={m} />
//                       </SwiperSlide>
//                     ))}
//                   </div>
//                 ))}
//             </div>
//           ))}

//         {/* {imageslider[productId].map((item) =>
//           item[colorItemId].map((image) => (
//             <SwiperSlide key={image}>
//               <img src={image} />
//             </SwiperSlide>
//           ))
//         )} */}
//         {/* <SwiperSlide>
//           <img src={img1} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img4} />
//         </SwiperSlide> */}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperSlider;
