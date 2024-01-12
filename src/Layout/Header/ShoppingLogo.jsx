import React from "react";
import { Link } from "react-router-dom";

// component
import ProductComponent from "./ProductComponent";

// style
import classes from "./style.module.css";

// packages
import { ConfigProvider, Badge, Dropdown, Flex } from "antd";
import { useSelector } from "react-redux";

// icons
import { FiShoppingCart } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiMiniPlus } from "react-icons/hi2";
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { AiTwotoneShopping } from "react-icons/ai";

// image

import productimg from "../../assets/image/photo_2019-12-11_16-39-53.jpg";
import img1 from "../../assets/image/thank-unsucess.svg";

const ShoppingLogo = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  console.log("cartitemshopping:", cartItem);

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    return priceFormat?.format(price);
  };

  const getCartTatalPriceOff = () => {
    let totalPriceOff = 0;
    if (cartItem.length > 0) {
      cartItem.map((item) => {
        if (item.off) {
          totalPriceOff +=
            (item.price - item.price * item.off * 0.01) * item.quantity;
        } else {
          totalPriceOff += item.price * item.quantity;
        }
      });
      console.log("totalpriceoff:", totalPriceOff);
      return priceIntl(totalPriceOff);
    }
  };

  const quantityItem = () => {
    var total = 0;
    // cartItem.forEach((item) => {
    //   total += item.quantity;
    // });
    // console.log("quantityItem:", "ff", total);
    // return total;

    if (cartItem.length > 0) {
      cartItem.map((item) => (total += parseInt(item.quantity)));
      console.log("total:", "ff", total);
      let N = isNaN(total);
      console.log("N:", N);
      return total;
    } else {
      return 0;
    }
  };

  console.log("quantityItem2:", quantityItem);
  //handler
  const handleremoveFromCart = () => {};
  const handleIncrement = () => {};
  const handleDecrement = () => {};
  // const products = [
  //   { id: 111, title: "کیف مجلسی زنانه کد100", priceoff: "1200000" },
  //   { id: 3112, title: "صندل زنانه کد601", priceoff: "600000" },
  // ];

  const dropdownItems = [];
  cartItem.map((item) =>
    dropdownItems.push({
      key: item.id,
      label: <ProductComponent key={item.id} data={item} />,
    })
  );
  console.log("dropdownItem:", dropdownItems);
  const items1 = [
    {
      key: "10",
      label: (
        <div className={classes["shopping-empty"]}>
          <AiTwotoneShopping className={classes["icon-close"]} />
          <img
            src={img1}
            alt="productimg"
            className={classes["shopping-img"]}
          />
          <span> سبد خرید شما خالی می باشد!</span>
        </div>
      ),
    },
  ];
  // const items = [];
  // cartItem.length > 0
  //   ? (
  const items = [
    {
      key: "11",
      label: (
        <div style={{ height: "450px", overflow: "scroll", padding: "8px" }}>
          <div className={classes["shopping-header"]}>
            <div className={classes["cart-quantity"]}>
              <span className={classes["shopping-title"]}>سبد خرید شما</span>
              <span className={classes["shopping-count"]}>
                {quantityItem()} عدد کالا
              </span>
            </div>
            <div>
              <Link to={`/cart`} className={classes["cart-view"]}>
                <span>مشاهده سبد خرید</span>
                <IoIosArrowBack />
              </Link>
            </div>
          </div>
          <div className={classes["price-sum_section"]}>
            <span>مبلغ کل خرید</span>
            <div className={classes["price-sum"]}>
              <span>{getCartTatalPriceOff()}</span>
              <span>تومان</span>
            </div>
          </div>
          <div>
            {cartItem.map((item) => (
              <ProductComponent key={item.id} data={item} />
            ))}
          </div>
          <div className={classes["section-sabt"]}>
            <Link to={`/login`} className={classes["btn-sabt"]}>
              ثبت سفارش و ارسال
            </Link>
          </div>
        </div>
      ),
    },
    // {
    //   key: "10",
    //   label: (
    //     <div className={classes["shopping-header"]}>
    //       <div className={classes["cart-quantity"]}>
    //         <span className={classes["shopping-title"]}>سبد خرید شما</span>
    //         <span className={classes["shopping-count"]}>
    //           {quantityItem()} عدد کالا
    //         </span>
    //       </div>
    //       <div>
    //         <Link to={`/cart`} className={classes["cart-view"]}>
    //           <span>مشاهده سبد خرید</span>
    //           <IoIosArrowBack />
    //         </Link>
    //       </div>
    //     </div>
    //   ),
    // },

    // {
    //   key: "3",
    //   label: (
    //     <div className={classes["price-sum_section"]}>
    //       <span>مبلغ کل خرید</span>
    //       <div className={classes["price-sum"]}>
    //         <span>{getCartTatalPriceOff()}</span>
    //         <span>تومان</span>
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   key: "30",
    //   label: (
    //     <Link to={`/cart`}>
    //       <div className={classes["icon-product"]}>
    //         <div className={classes["icon-section"]}>
    //           <IoClose
    //             onClick={handleremoveFromCart}
    //             className={classes["icon-close"]}
    //           />
    //         </div>
    //         <div className={classes["product-section"]}>
    //           <div>
    //             <img
    //               src={productimg}
    //               alt="productimg"
    //               className={classes["product-img"]}
    //             />
    //           </div>
    //           <div className={classes["product-item"]}>
    //             <div className={classes["product-off-section"]}>
    //               <h4 className={classes["product-title"]}>
    //                 کیف دوشی زنانه کد500
    //               </h4>
    //               <div className={classes["off-section"]}>
    //                 <span>20%</span>
    //               </div>
    //             </div>

    //             <div className={classes["price-section"]}>
    //               <div className={classes["product-orginal_price"]}>
    //                 <span>150000</span>
    //                 <span>تومان</span>
    //               </div>
    //               <div className={classes["product-off_price"]}>
    //                 <span>90000</span>
    //                 <span>تومان</span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className={classes["icon-count"]}>
    //             <HiOutlinePlus
    //               onClick={handleIncrement}
    //               className={classes.icon}
    //             />
    //             <span> 2 </span>
    //             <FaMinus onClick={handleDecrement} className={classes.icon} />
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   ),
    // },
    // {
    //   key: "40",
    //   label: (
    //     <Link to={`/cart`}>
    //       <div className={classes["icon-product"]}>
    //         <div className={classes["icon-section"]}>
    //           <RiDeleteBin6Line className={classes.icon} />
    //         </div>
    //         <div className={classes["product-section"]}>
    //           <div>
    //             <img
    //               src={productimg}
    //               alt="productimg"
    //               className={classes["product-img"]}
    //             />
    //           </div>
    //           <div className={classes["product-item"]}>
    //             <div className={classes["product-off-section"]}>
    //               <h4 className={classes["product-title"]}>
    //                 کمربند چرمی کد700
    //               </h4>
    //               <div className={classes["off-section"]}>
    //                 <span>20%</span>
    //               </div>
    //             </div>
    //             <div className={classes["price-section"]}>
    //               <div className={classes["product-orginal_price"]}>
    //                 <span>800000</span>
    //                 <span>تومان</span>
    //               </div>
    //               <div className={classes["product-off_price"]}>
    //                 <span>70000</span>
    //                 <span>تومان</span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className={classes["icon-count"]}>
    //             <HiOutlinePlus className={classes.icon} />
    //             <span> 2 </span>
    //             <FaMinus className={classes.icon} />
    //           </div>
    //         </div>
    //       </div>
    //     </Link>
    //   ),
    // },
    // ...cartItem.map((item) => ({
    //   key: item.id,
    //   label: <ProductComponent key={item.id} data={item} />,
    // })),
    // {
    //   key: "9",
    //   label: (
    //     <div className={classes["section-sabt"]}>
    //       <Link to={`/login`} className={classes["btn-sabt"]}>
    //         ثبت سفارش و ارسال
    //       </Link>
    //     </div>
    //   ),
    // },
    // ...dropdownItems.map((item) => ({
    //   key: item.id,
    //   label: (
    //     <div>
    //       <span>{item.title}</span>
    //       <span>{item.priceoff}</span>
    //     </div>
    //   ),
    // })),
  ];
  //   )
  // : (items = [
  //     {
  //       key: "10",
  //       label: <div>سبد خرید شما خالی است !</div>,
  //     },
  //   ]);
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            // lineHeight: 100,
            // width: 100,
            controlHeight: 30,
            borderRadius: 12,
            // controlItemBgHover: "red",
            controlItemBgActiveHover: "green",

            /* here is your global tokens */
          },
        }}
      >
        <Link to={`/cart`}>
          <Dropdown
            menu={{
              items: cartItem.length > 0 ? items : items1,
            }}
            overlayStyle={{
              width: "450px",
              // overflow: "auto",
              // height: "450px",

              boxShadow:
                "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.3) 0px 4px 8px 0px",
            }}
          >
            <Badge count={quantityItem()} showZero status="processing" on>
              <FiShoppingCart size={25} />
            </Badge>
          </Dropdown>
        </Link>
      </ConfigProvider>
    </div>
  );
};

export default ShoppingLogo;
