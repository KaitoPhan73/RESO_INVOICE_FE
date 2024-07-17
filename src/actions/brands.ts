import { httpInvoice } from "@/lib/http";
import {
  TBrandAccountBody,
  TBrandBody,
  TCreateBrandBody,
} from "@/schemaValidations/brand.schema";
import { TOrganizationAccountsResponse } from "@/schemaValidations/organizationaccounts.schema";
import { TTableResponse } from "@/types/Table";

const brandApi = {
  getBrands: (accessToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TBrandBody>>("brands", {
      params,
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  getBrandById: (brandId: string, sessionToken: string, params?: any) => {
    return httpInvoice.get<TBrandBody>(`brands/${brandId}`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getOrganizationAccountsByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TBrandBody>(
      `brands/${brandId}/organization-accounts`,
      {
        params,
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },
  getPartnersByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TBrandBody>(
      `brands/${brandId}/partners`,
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
    return httpInvoice.get<TBrandBody>(`brands/${brandId}/invoices`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getOrganizationByBrandId: (
    brandId: string,
    sessionToken: string,
    params?: any
  ) => {
    return httpInvoice.get<TTableResponse<TOrganizationAccountsResponse>>(
      `brands/${brandId}/organizations`,
      {
        params,
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },

  createBrand: (data: TCreateBrandBody) => {
    return httpInvoice.post<TCreateBrandBody>("brands", data);
  },
  createBrandAccount: (brandId: string, data: TBrandAccountBody) => {
    return httpInvoice.post<TBrandAccountBody>(`brands/${brandId}/users`, data);
  },
};

export default brandApi;
