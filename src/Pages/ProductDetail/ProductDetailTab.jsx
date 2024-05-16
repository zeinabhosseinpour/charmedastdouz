import { useState } from "react";

// style
import classes from "./style.module.css";

// component
import UserCommnets from "./UserCommnets";
import TechnicalCheck from "./TechnicalCheck ";
import ProductInfo from "./ProductInfo";

const ProductDetailTab = () => {
  //   states
  const [activeItem, setActiveItem] = useState("technicalCheck");

  //   vaariables
  const content = {
    productInfo: <ProductInfo />,
    technicalCheck: <TechnicalCheck />,
    userComments: <UserCommnets />,
  };

  // handlers

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <section className={classes["product-details_tab"]}>
      <ul className={classes["product-details"]}>
        <li className={classes["nav-menu_item"]}>
          <span
            className={
              activeItem === "technicalCheck"
                ? classes["detail-is_active"]
                : classes["product-detail_byitem"]
            }
            onClick={() => handleItemClick("technicalCheck")}
          >
            بررسی تخصصی
          </span>
        </li>

        <li className={classes["nav-menu_item"]}>
          <span
            className={
              activeItem === "productInfo"
                ? classes["detail-is_active"]
                : classes["product-detail_byitem"]
            }
            onClick={() => handleItemClick("productInfo")}
          >
            مشخصات محصول
          </span>
        </li>
        <li className={classes["nav-menu_item"]}>
          <span
            className={
              activeItem === "userComments"
                ? classes["detail-is_active"]
                : classes["product-detail_byitem"]
            }
            onClick={() => handleItemClick("userComments")}
          >
            نظرات کاربران
          </span>
        </li>
      </ul>

      <div>{content[activeItem]}</div>
    </section>
  );
};

export default ProductDetailTab;
