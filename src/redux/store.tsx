import { configureStore } from "@reduxjs/toolkit";
import counterSilce from "./Counter/counterSilce";

export const store = configureStore({
  reducer: {
    counter: counterSilce,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
