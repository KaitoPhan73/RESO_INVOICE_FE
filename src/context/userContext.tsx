"use client";
import userApi from "@/actions/users";
import { loadUserFromStorage, setUserServer } from "@/redux/User/userSlice";
import store, { AppDispatch } from "@/redux/store";
import { TUserBase } from "@/types/User";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const dispatch = store.dispatch as AppDispatch;
    dispatch(loadUserFromStorage());
    setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const dispatch = store.dispatch as AppDispatch;
      try {
        const res = await userApi.getUserFromServer();
        console.log("res:", res.payload);
        dispatch(setUserServer(res.payload));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData(); // Gọi hàm fetchData khi useEffect chạy
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
