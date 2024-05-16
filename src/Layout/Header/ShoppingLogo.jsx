import { Link } from "react-router-dom";

// component
import ProductComponent from "./ProductComponent";

// style
import classes from "./style.module.css";

// packages
import { ConfigProvider, Badge, Dropdown } from "antd";
import { useSelector } from "react-redux";

// icons
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { AiTwotoneShopping } from "react-icons/ai";

// images

import img1 from "../../assets/image/thank-unsucess.svg";

const ShoppingLogo = () => {
  //   state
  const cartItem = useSelector((state) => state.cart.cart);

  //    functions
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

      return priceIntl(totalPriceOff);
    }
  };

  const quantityItem = () => {
    var total = 0;

    if (cartItem.length > 0) {
      cartItem.map((item) => (total += parseInt(item.quantity)));

      return priceIntl(total);
    } else {
      return 0;
    }
  };

  //   variables
  const dropdownItems = [];
  cartItem.map((item) =>
    dropdownItems.push({
      key: item.id,
      label: <ProductComponent key={item.id} data={item} />,
    })
  );

  const items1 = [
    {
      key: "1",
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

  const items = [
    {
      key: "1",
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
  ];

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 30,
            borderRadius: 12,

            controlItemBgActiveHover: "green",
          },
        }}
      >
        <Link to={`/cart`}>
          <Dropdown
            className={classes["dropdown-badge"]}
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
            <Badge
              count={quantityItem()}
              showZero
              status="processing"
              on
              className={classes["badge-footer"]}
            >
              <FiShoppingCart
                size={25}
                className={classes["badge-icon_footer"]}
              />
            </Badge>
          </Dropdown>
        </Link>
      </ConfigProvider>
    </div>
  );
};

export default ShoppingLogo;
