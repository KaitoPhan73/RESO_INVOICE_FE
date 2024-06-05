import { httpInvoice } from "@/lib/http";
import { TBrandBody } from "@/schemaValidations/brand.schema";
import { TBrandBase } from "@/types/Brand";
import { TTableResponse } from "@/types/Table";

// const getBrands = async (sessionToken: string, params?: any) => {
//   "use server";
//   return httpInvoice.get<TTableResponse<TBrandBase>>("brands", {
//     params,
//     headers: { Authorization: `Bearer ${sessionToken}` },
//   });
// };
// const createBrand = async (data: TBrandBody) => {
//   " use server";
//   return httpInvoice.post<TBrandBody>("brands", data);
// };

const brandApi = {
  getBrands: (sessionToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TBrandBase>>("brands", {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getBrandById: (brandId: string, sessionToken: string, params?: any) => {
    return httpInvoice.get<TBrandBase>(`brands/${brandId}`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getInventoryItemsByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TBrandBase>(`brands/${brandId}/inventory-items`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getInvoiceByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TBrandBase>(`brands/${brandId}/invoices`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getOrganizationByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TBrandBase>(`brands/${brandId}/organizations`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getUserByBrandId: (brandId: string, sessionToken: string, params?: any) => {
    return httpInvoice.get<TBrandBase>(`brands/${brandId}/users`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  createBrand: (data: TBrandBody) => {
    return httpInvoice.post<TBrandBody>("brands", data);
  },
};

export default brandApi;
