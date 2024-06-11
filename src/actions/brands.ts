import { httpInvoice } from "@/lib/http";
import { TBrandAccountBody, TBrandBody } from "@/schemaValidations/brand.schema";
import { TBrandBase } from "@/types/Brand";
import { TTableResponse } from "@/types/Table";

const brandApi = {
  getBrands: (accessToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TBrandBase>>("brands", {
      params,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  getBrandById: (brandId: string, sessionToken: string, params?: any) => {
    return httpInvoice.get<TBrandBase>(`brands/${brandId}`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getOrganizationAccountsByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TBrandBase>(
      `brands/${brandId}/organization-accounts`,
      {
        params,
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },
  // getInventoryItemsByBrandId: (
  //   brandId: string,
  //   sessionToken: string,
  //   params?: any
  // ) => {
  //   return httpInvoice.get<TBrandBase>(`brands/${brandId}/inventory-items`, {
  //     params,
  //     headers: { Authorization: `Bearer ${sessionToken}` },
  //   });
  // },
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

  createBrand: (data: TBrandBody) => {
    return httpInvoice.post<TBrandBody>("brands", data);
  },
  createBrandAccount: (brandId: string ,data: TBrandAccountBody) => {
    return httpInvoice.post<TBrandAccountBody>(`brands/${brandId}/users`, data);
  },
};

export default brandApi;
