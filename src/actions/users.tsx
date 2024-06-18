import { httpInvoice, httpServer } from "@/lib/http";
import { TLoginResponse } from "@/schemaValidations/auth.schema";
import { TTableResponse } from "@/types/Table";
import { TUserBase } from "@/types/User";

const userApi = {
  getUsers: (sessionToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TUserBase>>("brands", {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getUserByBrandId: (brandId: string, sessionToken: string, params?: any) => {
    return httpInvoice.get<TUserBase>(`brands/${brandId}/users`, {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getUserFromServer: (params?: any) => {
    return httpServer.get<TLoginResponse>("api/user", {
      params,
    });
  },
};

export default userApi;
