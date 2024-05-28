import { httpInvoice } from "@/lib/http";
import { TBrandBase } from "@/types/Brand";
import { TTableResponse } from "@/types/Table";

const getBrands = async (sessionToken: string, params?: any) => {
  "use server";
  return httpInvoice.get<TTableResponse<TBrandBase>>("brands", {
    params,
    headers: { Authorization: `Bearer ${sessionToken}` },
  });
};

const brandApi = {
  getBrands,
};

export default brandApi;
