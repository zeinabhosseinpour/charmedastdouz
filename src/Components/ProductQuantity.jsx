// style
import classes from "./style.module.css";

// icons
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";

// package
import { cartaction } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

//component

import { child3 } from "./Shop/Products/productsList2";

const ProductQuantity = (props) => {
  //  variables

  const dispatch = useDispatch();

  const item1 = child3.find((c3) => c3.id === props.data.id);
  const item2 = item1.attributes.find((i) => i.color === props.data.color);

  //  function
  const priceIntl = (price) => {
    const priceFormat = new Intl.NumberFormat("fa-IR");
    return priceFormat?.format(price);
  };

  //  handlers
  const handleIncrement = (id) => {
    dispatch(
      cartaction.incrementQuantity({
        productId: id,
        productColor: props.data.color,
      })
    );
  };

  const handleDecrement = (id) => {
    dispatch(
      cartaction.decrementQuantity({
        productId: id,
        productColor: props.data.color,
      })
    );
  };
  return (
    <div className={classes["icon-count"]}>
      <button
        disabled={props.data.quantity >= item2.colorcount}
        className={classes["icon-btn"]}
      >
        <HiOutlinePlus
          onClick={() => handleIncrement(props.data.id)}
          className={classes.icon}
          disabled={props.data.quantity >= item2.colorcount}
        />
      </button>

      <span> {priceIntl(props.data.quantity)}</span>
      <FaMinus
        onClick={() => handleDecrement(props.data.id)}
        className={classes.icon}
      />
    </div>
  );
};

export default ProductQuantity;
