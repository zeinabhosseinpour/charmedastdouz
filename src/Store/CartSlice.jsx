//   package
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, title, slug, price, off } = action.payload.cartItem;
      const priceOff = price - price * off * 0.01;
      const totalPriceOff = priceOff * action.payload.quantity;
      const newCart = {
        id: id,
        title: title,
        slug: slug,
        price: price,
        off: off,
        priceoff: price - price * off * 0.01,
        quantity: action.payload.quantityItem,
        totalpriceoff: totalPriceOff,
        imag: action.payload.productImg,
        color: action.payload.productColor,
        size: action.payload.productSize,
      };

      const existingColorItem = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.cartItem.id
      );

      if (existingColorItem) {
        existingColorItem.quantity = action.payload.quantityItem;
      } else {
        state.cart = [newCart, ...state.cart];
      }
    },

    incrementQuantity(state, action) {
      const item = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );

      const existingColorItem = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );

      if (existingColorItem) {
        item.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const item = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );

      const existingColorItem = state.cart.find(
        (item) =>
          item.color === action.payload.productColor &&
          item.id === action.payload.productId
      );

      if (existingColorItem) {
        item.quantity > 1 ? item.quantity-- : "";
      }
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
