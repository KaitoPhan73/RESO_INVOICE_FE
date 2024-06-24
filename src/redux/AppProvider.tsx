"use client";
import { Provider } from "react-redux";
import store from "./store";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import SnackbarProviders from "./SnackBar";
const cache = createCache({ key: "my-prefix-key" });
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider value={cache}>
      <SnackbarProviders>
        <Provider store={store}>
          <AntdRegistry>{children}</AntdRegistry>
        </Provider>
      </SnackbarProviders>
    </CacheProvider>
  );
};

export default AppProvider;
