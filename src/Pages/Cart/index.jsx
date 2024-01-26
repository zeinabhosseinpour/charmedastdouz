import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartaction } from "../../store/cartSlice";

// component
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import ProductQuantity from "../../Components/ProductQuantity";

// icon
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// image

import img1 from "../../assets/image/thank-unsucess.svg";

//style
import classes from "./style.module.css";

const Cart = () => {
  // state
  const [quantity, setQuantity] = useState(1);
  const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log("cartitemcart", cartItem);
  console.log("cartitemlength:", cartItem.length);
  //handler
  const handleremoveFromCart = (id, color) => {
    dispatch(
      cartaction.removeItemFromCart({ productId: id, productColor: color })
    );
  };
  const handleIncrement = (id, itemQuantity) => {
    // setQuantity(itemQuantity + 1);
    console.log("quantitycartincre:", quantity, itemQuantity);
    dispatch(cartaction.incrementQuantity({ productId: id }));
  };

  const handleDecrement = (id, itemQuantity) => {
    // itemQuantity > 1 ? setQuantity(itemQuantity - 1) : "";
    console.log("quantitycartdec:", quantity, itemQuantity);
    dispatch(cartaction.decrementQuantity({ productId: id }));
  };

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    return priceFormat?.format(price);
  };
  const getPriceOff = (price, off, quantity) => {
    if (off) {
      const priceOff = (price - price * off * 0.01) * quantity;
      return priceIntl(priceOff);
    } else {
      // console.log("offgetcart:", off);
      return priceIntl(price * quantity);
    }
  };
  // const grandTotal =
  //     cartItems.length === 0
  //       ? 0
  //       : cartItems
  //           .map((item) =>
  //             item.includedInSum ? item.price * item.quantity : 0
  //           )
  //           .reduce((itemPrice, accPrice) => accPrice + itemPrice);
  //   const cartQuantity = cartItems.length;

  //   const cartTotal = cartItem
  //     .map((item) => item.price * item.quantity)
  //     .reduce((prevValue, currValue) => prevValue + currValue, 0);
  const getCartTotalQuantity = () => {
    let totalQuantity = 0;

    if (cartItem.length > 0) {
      cartItem.map((item) => (totalQuantity += item.quantity));
      // console.log("total:", "ff", total);
      // let N = isNaN(total);
      // console.log("N:", N);
      return totalQuantity;
    } else {
      return 0;
    }
  };

  const getCartTatalPrice = () => {
    let totalPrice = 0;
    if (cartItem.length > 0) {
      cartItem.map((item) => (totalPrice += item.price * item.quantity));
      // console.log("totalprice:", totalPrice);

      return priceIntl(totalPrice);
    }
  };
  const getCartTotalOff = () => {
    let totalOff = 0;
    if (cartItem.length > 0) {
      cartItem.map((item) => {
        if (item.off) {
          totalOff += item.price * item.off * 0.01 * item.quantity;
        }
        //  else {
        //   totalOff += item.price * item.quantity;
        // }
      });
      return priceIntl(totalOff);
    }
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
      // console.log("totalpriceoff:", totalPriceOff);
      return priceIntl(totalPriceOff);
    }
  };

  return (
    <div>
      <Header />
      {cartItem.length > 0 ? (
        <div className={classes["cart-page"]}>
          {/* <div className={classes["icon-section"]}>
          <IoClose
            onClick={handleremoveFromCart}
            className={classes["icon-close"]}
          />
        </div>
        <div className={classes["product-section"]}>
          <div></div>
          <div className={classes["product-item"]}>
            <div className={classes["product-off-section"]}>
              <h4 className={classes["product-title"]}>کیف دوشی زنانه کد500</h4>
              <div className={classes["off-section"]}>
                <span>20%</span>
              </div>
            </div>

            <div className={classes["price-section"]}>
              <div className={classes["product-orginal_price"]}>
                <span>150000</span>
                <span>تومان</span>
              </div>
              <div className={classes["product-off_price"]}>
                <span>90000</span>
                <span>تومان</span>
              </div>
            </div>
          </div>

          <div className={classes["icon-count"]}>
            <HiOutlinePlus
              onClick={() => handleIncrement()}
              className={classes.icon}
            />
            <span> 2 </span>
            <FaMinus onClick={handleDecrement} className={classes.icon} />
          </div>
        </div> */}

          <div className={classes["cart-product"]}>
            {cartItem.map((item) => {
              // const itemTotal = new Intl.NumberFormat("fa-IR", {}).format(
              //   item.price * item.quantity
              // );
              // const priceOff = new Intl.NumberFormat("fa-IR", {}).format(
              //   item.price - item.price * (item.off * 0.01)
              // );
              // console.log("itemtotal:", itemTotal);
              // console.log("priceOff:", priceOff);
              return (
                <div key={item.id} className={classes["single-cart_product"]}>
                  <div className={classes["icon-section"]}>
                    <IoClose
                      onClick={() => handleremoveFromCart(item.id, item.color)}
                      className={classes["icon-close"]}
                    />
                  </div>
                  <div className={classes["product-section"]}>
                    <div className={classes["img-feature"]}>
                      <Link to={`/product-detail/${item.id}/${item.slug}`}>
                        <img
                          src={item.imag}
                          alt="productimg"
                          className={classes["product-img"]}
                        />
                      </Link>
                      <div className={classes["product-item"]}>
                        <div className={classes["product-attribute"]}>
                          <Link
                            className={classes["product-title"]}
                            to={`/product-detail/${item.id}/${item.slug}`}
                          >
                            <h4>{item.title}</h4>
                          </Link>
                          <span>رنگ : {item.color}</span>
                          <span>
                            سایز: {item.size}
                            {console.log("sizecart:", item.size)}
                          </span>
                        </div>
                        {/* 
                        {item.off && (
                          <div style={{ backgroundColor: "green" }}>
                            <div className={classes["off-section"]}>
                              <span> {item.off} </span>
                            </div>

                            <div className={classes["price-section"]}>
                              <div className={classes["product-orginal_price"]}>
                                <span>{priceIntl(item.price)}</span>
                                <span> تومان </span>
                              </div>
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>
                    <div className={classes["icon-price_off"]}>
                      <div className={classes["product-off_price"]}>
                        {/* <span style={{ backgroundColor: "pink" }}>
                        تومان {priceIntl(item.price * item.quantity)}
                      </span> */}
                        {item.off && (
                          <div className={classes["price-off"]}>
                            <div className={classes["price-section"]}>
                              <div className={classes["product-orginal_price"]}>
                                <span>{priceIntl(item.price)}</span>
                                <span> تومان </span>
                              </div>
                            </div>
                            <span>
                              {priceIntl(
                                item.price * (item.off * 0.01) * item.quantity
                              )}
                              تومان تخفیف
                            </span>
                          </div>
                        )}
                        <span className={classes["p-offprice"]}>
                          {getPriceOff(item.price, item.off, item.quantity)}
                          تومان
                        </span>
                      </div>
                      <ProductQuantity key={item.id} data={item} />
                    </div>
                    {/* <div className={classes["icon-count"]}>
                      <button
                        // disabled={quantity >= countColor}
                        className={classes["icon-btn"]}
                      >
                        <HiOutlinePlus
                          onClick={() =>
                            handleIncrement(item.id, item.quantity)
                          }
                          className={classes.icon}
                        />
                      </button>
                      <span> {item.quantity}</span>
                      <FaMinus
                        onClick={() => handleDecrement(item.id, item.quantity)}
                        className={classes.icon}
                      />
                    </div> */}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={classes["section-price"]}>
            <div
              className={`${classes["product-total-section"]} ${classes["total-price"]} `}
            >
              <div>
                <span> قیمت </span>

                <span> {getCartTotalQuantity()} </span>
                <span>محصول </span>
              </div>
              <div>
                <span>{getCartTatalPrice()}</span>
                <span> تومان </span>
              </div>
            </div>
            <div
              className={`${classes["product-total-section"]} ${classes["total-off"]} `}
            >
              <span> مبلغ تخفیف محصولات </span>
              <div>
                <span>{getCartTotalOff()}</span>
                <span> تومان </span>
              </div>
            </div>
            <div
              className={` ${classes["product-total-section"]} ${classes["total-price"]} `}
            >
              <span> :هزینه ارسال </span>
              <span> وابسته به نوع ارسال </span>
            </div>
            <div
              className={` ${classes["product-total-section"]} ${classes["total-priceoff"]} `}
            >
              <span>مبلغ کل قابل پرداخت:</span>
              <div>
                <span>{getCartTatalPriceOff()}</span>
                <span>تومان</span>
              </div>
            </div>
            <Link to={`/login`} className={classes["btn-add_cart"]}>
              <span> ثبت سفارش و ادامه خرید</span>
            </Link>
          </div>

          {/* <div
            id="base_layout_mobile_footer"
            className={classes["base_layout_mobile_footer"]}
          > */}
          <div
            className={` ${classes["product-totalprice_mobile"]} ${classes["total-priceoff"]} `}
          >
            <Link to={`/login`} className={classes["btn-addcart_mobile"]}>
              <span> ثبت سفارش و ادامه خرید</span>
            </Link>
            <span>مبلغ کل قابل پرداخت:</span>
            <div>
              <span>{getCartTatalPriceOff()}</span>
              <span>تومان</span>
            </div>
          </div>
          {/* </div> */}
        </div>
      ) : (
        <div className={classes["shopping-empty"]}>
          <img
            src={img1}
            alt="productimg"
            className={classes["product-color-img"]}
          />
          <div>سبد خرید شما خالی است</div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
