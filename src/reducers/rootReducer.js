import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { checkoutReducer } from "./checkoutReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  checkout: checkoutReducer
});

