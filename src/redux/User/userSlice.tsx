import { isClient } from "@/lib/http";
import { TLoginResponse } from "@/schemaValidations/auth.schema";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TUser = Omit<TLoginResponse, "accessToken">;

interface UserState {
  user: TUser | null;
  isAuthenticated: boolean;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return {
        products: [],
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      products: [],
    };
  }
};

const initialState: UserState = {
  user: loadState(),
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TUser | null>) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    loadUserFromStorage(state) {
      if (isClient()) {
        const storedUser = localStorage.getItem("user");
        state.user = storedUser ? JSON.parse(storedUser) : null;
        state.isAuthenticated = !!state.user;
      }
    },
  },
});

export const { setUser, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
