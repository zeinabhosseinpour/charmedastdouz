import React, { useState } from "react";

// style
import classes from "./style.module.css";

// icon
import { FaMinus } from "react-icons/fa6";
import { HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

// package
import { cartaction } from "../Store/CartSlice";

//component

import { child3 } from "./Shop/Products/productsList2";

const ProductQuantity = (props) => {
  //   const [quantity, setQuantity] = useState(1);
  // const cartItem = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  // const item = cartItem.find((c) => c.id === props.data.id);
  // console.log("productquantityItem:", item);
  const item1 = child3.find((c3) => c3.id === props.data.id);
  const item2 = item1.attributes.find((i) => i.color === props.data.color);
  const item3 = child3
    .find((c3) => c3.id === props.data.id)
    .attributes.find((i) => i.color === props.data.color);

  console.log("item1:", item1);
  console.log("item2:", item2);
  console.log("item3:", item3);

  const handleIncrement = (id, itemQuantity) => {
    // setQuantity(itemQuantity + 1);
    console.log("quantitycartincre:", itemQuantity);
    dispatch(
      cartaction.incrementQuantity({
        productId: id,
        productColor: props.data.color,
      })
    );
  };

  const handleDecrement = (id, itemQuantity) => {
    // itemQuantity > 1 ? setQuantity(itemQuantity - 1) : "";
    console.log("quantitycartdec:", itemQuantity);
    dispatch(
      cartaction.decrementQuantity({
        productId: id,
        productColor: props.data.color,
      })
    );
  };
  return (
    // <div className={classes["icon-count"]}>
    //   <button disabled={quantity >= countColor} className={classes["icon-btn"]}>
    //     <HiOutlinePlus
    //       // disabled={quantity > countColor}
    //       onClick={
    //         () =>
    //           // quantity < countColor &&
    //           setQuantity(quantity + 1)
    //         // : ""
    //       }
    //       className={classes.icon}
    //     />
    //   </button>

    //   <span>{quantity}</span>
    //   <FaMinus
    //     onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : "")}
    //     className={classes.icon}
    //   />
    // </div>
    <div className={classes["icon-count"]}>
      <button
        disabled={props.data.quantity >= item2.colorcount}
        className={classes["icon-btn"]}
      >
        <HiOutlinePlus
          onClick={() => handleIncrement(props.data.id)}
          className={classes.icon}
        />
      </button>
      <span> {props.data.quantity}</span>
      <FaMinus
        onClick={() => handleDecrement(props.data.id)}
        className={classes.icon}
      />
    </div>
    //     <div className={classes["icon-count"]}>
    //     <HiOutlinePlus onClick={handleIncrement} className={classes.icon} />
    //     <span className={classes["product-quantity"]}>

    //       {props.data.quantity}
    //     </span>
    //     <FaMinus onClick={handleDecrement} className={classes.icon} />
    //   </div>
  );
};

export default ProductQuantity;
