import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// package
import { useDispatch, useSelector } from "react-redux";
import { cartaction } from "./../../Store/CartSlice";

// style
import classes from "./style.module.css";

// icons
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import productimg from "../../assets/image/photo_2019-12-11_16-39-53.jpg";

// comonent
import ProductQuantity from "../../Components/ProductQuantity";
import { child3 } from "../../Components/Shop/Products/productsList2";

const ProductComponent = (props) => {
  const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // console.log("idprops", props.data);
  console.log("idprops", props.data.id);
  // console.log("title", props.data.title);
  // console.log("data:", props.data.priceoff);

  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const x = priceFormat?.format(price);
    console.log("intl:", x);
    return x;
  };
  const getCartTatalPrice = (price) => {
    let totalPrice = 0;
    if (cartItem.length > 0) {
      // cartItem.map((item) => (totalPrice += item.price * item.quantity));
      totalPrice = props.data.price * props.data.quantity;
      console.log("totalprice:", totalPrice);

      return priceIntl(totalPrice);
    }
  };
  // const getCartTotalOff = () => {
  //   let totalOff = 0;
  //   if (cartItem.length > 0) {
  //     cartItem.map((item) => {
  //       if (item.off) {
  //         totalOff += item.price * item.off * 0.01 * item.quantity;
  //       }
  //       //  else {
  //       //   totalOff += item.price * item.quantity;
  //       // }
  //     });
  //     return priceIntl(totalOff);
  //   }
  // };
  const getCartTatalPriceOff = () => {
    let totalPriceOff = 0;
    if (cartItem.length > 0) {
      //   cartItem.map((item) => {
      //     if (item.off) {
      //       totalPriceOff +=
      //         (item.price - item.price * item.off * 0.01) * item.quantity;
      //     } else {
      //       totalPriceOff += item.price * item.quantity;
      //     }
      //   });
      if (props.data.off) {
        totalPriceOff =
          (props.data.price - props.data.price * props.data.off * 0.01) *
          props.data.quantity;
      } else {
        totalPriceOff = props.data.price * props.data.quantity;
      }
    }
    console.log("totalpriceoff:", totalPriceOff);
    return priceIntl(totalPriceOff);
  };

  //handler
  const handleremoveFromCart = (id, color) => {
    dispatch(
      cartaction.removeItemFromCart({
        productId: id,
        // productColor: props.data.color,
        productColor: color,
      })
    );
  };
  const handleIncrement = (id) => {
    dispatch(cartaction.incrementQuantity({ productId: id }));
  };
  const handleDecrement = (id) => {
    dispatch(cartaction.decrementQuantity({ productId: id }));
  };

  // const getSlug=()=> {
  const productSlugfilter = child3.filter((c3) => c3.id === props.data.id);
  console.log("productslugfilter:", productSlugfilter);
  const slugfilter = productSlugfilter.map((p) => ({ slugp: p.slug }));
  console.log("slugfilter:", slugfilter);

  const pslug = productSlugfilter.filter(
    (a) => a.attributes.color === props.data.color
  );

  console.log("pslug:", pslug);

  const productSlug = child3.find((c3) => c3.id === props.data.id);
  console.log("productslug:", productSlug);
  const slug = productSlug.slug;
  console.log("slugcom:", slug);
  // }
  useEffect(() => {
    const productSlug = child3.find((c3) => c3.id === props.data.id);
    console.log("psluguseefect:", productSlug);
    const sluguseeffect = productSlug.slug;
    console.log("slugcomuseeffect:", sluguseeffect);
  }, [child3]);
  return (
    <div>
      <div className={classes["icon-product"]}>
        <div className={classes["icon-section"]}>
          <IoClose
            onClick={() =>
              handleremoveFromCart(props.data.id, props.data.color)
            }
            className={classes["icon-close"]}
          />
        </div>
        <div className={classes["product-section"]}>
          <div>
            <Link to={`/product-detail/${props.data.id}/${slug}`}>
              <img
                src={props.data.imag}
                alt="productimg"
                className={classes["product-img"]}
              />
            </Link>
          </div>
          <div className={classes["product-item"]}>
            <div className={classes["product-off-section"]}>
              <div className={classes["product-attribute"]}>
                <Link to={`/product-detail/${props.data.id}/${slug}`}>
                  <h4 className={classes["product-title"]}>
                    {props.data.title}
                  </h4>
                </Link>

                <div className={classes["color-size-off"]}>
                  <div className={classes["product-color_size"]}>
                    <span>رنگ : {props.data.color}</span>
                    <span>سایز: {props.data.size}</span>
                  </div>

                  {props.data.off && (
                    <div>
                      <span className={classes["off-section"]}>
                        % {props.data.off}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className={classes["price-section"]}>
              {props.data.off && (
                <div className={classes["product-orginal_price"]}>
                  <span>{getCartTatalPrice()}</span>
                  <span>تومان</span>
                </div>
              )}
              <div className={classes["product-off_price"]}>
                <span>{getCartTatalPriceOff()}</span>
                <span>تومان</span>
              </div>
            </div>
          </div>
          <ProductQuantity data={props.data} />
          {/* <div className={classes["icon-count"]}>
            <HiOutlinePlus
              onClick={() => handleIncrement(props.data.id)}
              className={classes.icon}
            />
            <span className={classes["product-quantity"]}>
              {props.data.quantity}
            </span>
            <FaMinus
              onClick={() => handleDecrement(props.data.id)}
              className={classes.icon}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
