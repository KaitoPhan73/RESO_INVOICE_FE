"use client";
import { Provider } from "react-redux";
import store from "./store";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
const cache = createCache({ key: "my-prefix-key" });
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [client] = React.useState(new QueryClient());
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <AntdRegistry>
          <QueryClientProvider client={client}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </AntdRegistry>
      </CacheProvider>
    </Provider>
  );
};

export default AppProvider;
