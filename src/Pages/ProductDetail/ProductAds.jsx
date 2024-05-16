import { Link } from "react-router-dom";

// style

import classes from "./style.module.css";

// images
import img1 from "../../assets/image/0003081_Commodity-guarantee-removebg-preview.png";
import img2 from "../../assets/image/0003071_fast-sending.png";
import img4 from "../../assets/image/7days.png";

const ProductAds = () => {
  return (
    <div className={classes["ads-section"]}>
      <Link to="/" className={classes["ads-content"]}>
        <img src={img4} alt="img4" className={classes.img} />
        <div>هفت روز امکان عودت و تعویض محصول</div>
      </Link>

      <Link to="/" className={classes["ads-content"]}>
        <img src={img2} alt="img2" className={classes.img} />
        <div>خدمات پس از فروش </div>
      </Link>

      <Link to="/" className={classes["ads-content"]}>
        <img src={img1} alt="img1" className={classes.img} />
        <div>ضمانت اصل بودن چرم طبیعی</div>
      </Link>

      <Link to="/" className={classes["ads-content"]}>
        <img src={img2} alt="img2" className={classes.img} />
        <div>ارسال رایگان سفارش بیش از چهارصد هزار تومان</div>
      </Link>
    </div>
  );
};

export default ProductAds;
