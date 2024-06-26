import { httpInvoice } from "@/lib/http";
import { TBrandBody } from "@/schemaValidations/brand.schema";
import { TBrandAccountsBase } from "@/types/Brand-Account";
import { TTableResponse } from "@/types/Table";

const accountApi = {
    getBrands: (sessionToken: string, params?: any) => {
        return httpInvoice.get<TTableResponse<TBrandBody>>("brands", {
            params,
            headers: { Authorization: `Bearer ${sessionToken}` },
        });
    },
    getBrandAccount: (sessionToken: string, params?: any) => {
        return httpInvoice.get<TTableResponse<TBrandAccountsBase>>("accounts/brand-accounts", {
            params,
            headers: { Authorization: `Bearer ${sessionToken}` },
        });
    },
    getInventoryItemsByBrandId: (
        brandId: string,
        sessionToken: string,
        params?: any
    ) => {
        return httpInvoice.get<TBrandBody>(`brands/${brandId}/inventory-items`, {
            params,
            headers: { Authorization: `Bearer ${sessionToken}` },
        });
    },

    createBrand: (data: TBrandBody) => {
        return httpInvoice.post<TBrandBody>("brands", data);
    },
};

export default accountApi;
