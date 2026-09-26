import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";



  export const rootReducer= combineReducers({
    cart:cartReducer
  })




export const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
// export type AppDispatch = AppStore["dispatch"];