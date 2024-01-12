import { createSlice } from "@reduxjs/toolkit";
import Item from "antd/es/list/Item";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, price, off, img } = action.payload.cartItem;
      const priceOff = price - price * off * 0.01;
      const totalPriceOff = priceOff * action.payload.quantity;
      const newCart = {
        id: id,
        title: title,
        price: price,
        off: off,
        priceoff: price - price * off * 0.01,
        quantity: action.payload.quantityItem,
        totalpriceoff: totalPriceOff,
        imag: action.payload.productImg,
        color: action.payload.productColor,
        size: action.payload.productSize,
      };
      // const newCart = {
      //   id: action.payload.cartItem.id,
      //   title: action.payload.cartItem.title,
      //   price: action.payload.cartItem.price,
      //   off: action.payload.cartItem.off,
      //   priceoff: action.payload.cartItem.priceoff,
      //   quantity: action.payload.quantityItem,
      //   total: 0,
      // };
      console.log("quantitycart:", action.payload.quantityItem);
      console.log("inisitalstate:", state.cart);
      console.log("newcart:", newCart);
      console.log("addpaylodcartitem.id:", action.payload.cartItem.id);
      console.log("addcartslice:", action.payload.cartItem);
      console.log("sizeaddcartslice:", action.payload.productSize);
      console.log("coloraddcartslice:", action.payload.productColor);
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.cartItem.id
      );

      const existingColorItem = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.cartItem.id
      );
      // if (existingItem) {
      if (existingColorItem) {
        console.log("exisitingitem:", existingItem);
        console.log("exisitingcoloritem:", existingColorItem);
        console.log("ffffffffffffffff");
        // existingItem.quantity++;
        existingColorItem.quantity = action.payload.quantityItem;
      } else {
        console.log("elseexisitingcoloritem:", existingColorItem);
        state.cart = [newCart, ...state.cart];
      }
      // } else {
      //   console.log("elseexisitingitem:", existingItem);
      //   // state.cart.push(newCart);
      //   state.cart = [newCart, ...state.cart];
      // }
      console.log("state.cart:", state.cart);
    },

    incrementQuantity(state, action) {
      // console.log("stateQuantity:", state.cart.quantityItem);
      console.log("inccolorcart:", action.payload.productColor);

      console.log("action.payload.productId:", action.payload.productId);
      const item = state.cart.find(
        (item) =>
          //  {
          //   console.log("itemfind:", item.id, "id", action.payload.productId);
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
        // }
      );
      console.log("iteminc:", item);
      console.log("incpaylodcartitem.id:", action.payload.productId);
      const existingColorItem = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );
      // if (item) {
      if (existingColorItem) {
        console.log("exisitingitem:", item);
        console.log("incexisitingcoloritem:", existingColorItem);
        console.log("fcccccccc");
        console.log("incquantitycart:", state.cart.quantity);
        // existingItem.quantity++;
        item.quantity += 1;
        console.log("incslice:", action.payload.productId, item.quantity);

        // item.quantity ++;
      }
      // }
      console.log("state.cartincrement:", state.cart);
    },

    decrementQuantity(state, action) {
      const item = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );
      console.log("itemdec:", item);
      const existingColorItem = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );
      // if (item) {
      if (existingColorItem) {
        item.quantity > 1 ? item.quantity-- : "";
        console.log("decslice:", action.payload.productId, item.quantity);
      }
      console.log("state.cartdescrement:", state.cart);
    },

    removeItemFromCart(state, action) {
      state.cart = state.cart.filter(
        (item) =>
          item.color !== action.payload.productColor ||
          item.id !== action.payload.productId
      );
    },
  },
});

export const cartaction = cartSlice.actions;
export default cartSlice;
