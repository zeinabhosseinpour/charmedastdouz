import { Link } from "react-router-dom";

// package
import { useDispatch, useSelector } from "react-redux";
import { cartaction } from "./../../Store/CartSlice";

// style
import classes from "./style.module.css";

// icons

import { IoClose } from "react-icons/io5";

// comonent
import ProductQuantity from "../../Components/ProductQuantity";

//  data
import { child3 } from "../../Components/Shop/Products/productsList2";

const ProductComponent = (props) => {
  //   states
  const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  //  variables
  const productSlug = child3.find((c3) => c3.id === props.data.id);

  const slug = productSlug.slug;

  //  functions
  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    const priceInt = priceFormat?.format(price);

    return priceInt;
  };
  const getCartTatalPrice = (price) => {
    let totalPrice = 0;
    if (cartItem.length > 0) {
      totalPrice = props.data.price * props.data.quantity;
      return priceIntl(totalPrice);
    }
  };

  const getCartTatalPriceOff = () => {
    let totalPriceOff = 0;
    if (cartItem.length > 0) {
      if (props.data.off) {
        totalPriceOff =
          (props.data.price - props.data.price * props.data.off * 0.01) *
          props.data.quantity;
      } else {
        totalPriceOff = props.data.price * props.data.quantity;
      }
    }

    return priceIntl(totalPriceOff);
  };

  //handler
  const handleremoveFromCart = (id, color) => {
    dispatch(
      cartaction.removeItemFromCart({
        productId: id,
        productColor: color,
      })
    );
  };

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
                    <span>سایز : {props.data.size}</span>
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
                  <span> تومان </span>
                </div>
              )}
              <div className={classes["product-off_price"]}>
                <span> {getCartTatalPriceOff()} </span>
                <span> تومان </span>
              </div>
            </div>
          </div>
          <ProductQuantity data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
