//   component

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import SingleProductDetail from "./SingleProductDetail";

//  style
import classes from "./style.module.css";
import "./global.css";

const ProductDetail = () => {
  return (
    <div className={classes["body-detail"]}>
      <Header />
      <SingleProductDetail />
      <Footer />
    </div>
  );
};

export default ProductDetail;
