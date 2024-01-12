import React, { useState } from "react";

// style
import classes from "./style.module.css";

// component
import UserCommnets from "./UserCommnets";
import TechnicalCheck from "./TechnicalCheck ";
import ProductInfo from "./ProductInfo";

const ProductDetailTab = () => {
  const [activeItem, setActiveItem] = useState("technicalCheck");

  // const header = {
  //   headerTitle: "productInfo",
  //   headerTitle: "TechnicalCheck",
  //   headerTitle: "UserCommnets",
  // };
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
      {/* <div
            className={
              activeItem === header.headerTitle
                ? classes["detail-is_active"]
                : classes["product-detail_byitem"]
            }
            onClick={() => handleItemClick(header.headerTitle)}
          >
            {header.headerTitle}
          </div> */}
      <div>{content[activeItem]}</div>
    </section>
  );
};

export default ProductDetailTab;
