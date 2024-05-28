"use client";
import { Provider, useDispatch } from "react-redux";
import store, { AppDispatch } from "./store";
import { useEffect } from "react";
import { loadUserFromStorage } from "./User/userSlice";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
