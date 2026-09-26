"use client";

import { Provider } from "react-redux";
import {  rootReducer } from "./index";
import { configureStore } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {

   const store = configureStore({ reducer: rootReducer, devTools: true });

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;