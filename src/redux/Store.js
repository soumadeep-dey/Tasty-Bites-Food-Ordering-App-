import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.js";
import CategorySlice from "./slices/CategorySlice.js";
import SearchSlice from "./slices/SearchSlice.js";
import AuthSlice from "./slices/AuthSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
    auth: AuthSlice,
  },
});

export default Store;
