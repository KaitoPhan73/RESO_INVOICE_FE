import { httpInvoice } from "@/lib/http";
import { TStore } from "@/schemaValidations/store.schema";

import { TTableResponse } from "@/types/Table";

const StoresApi = {
  getStores: (sessionToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TStore>>("stores", {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
};

export default StoresApi;
