import { httpInvoice, httpMock } from "@/lib/http";
import { TTableResponse } from "@/types/Table";
import { TUserBase } from "@/types/User";

// const getUsers = async (sessionToken: string, params?: any) => {
//   "use server";
//   return httpInvoice.get<TTableResponse<TUserBase>>("brands", {
//     params,
//     headers: { Authorization: `Bearer ${sessionToken}` },
//   });
// };

// const getBrandById: (brandId: string, sessionToken: string, params?: any) => {
//   return httpInvoice.get<TBrandBase>(`brands/${brandId}`, {
//     params,
//     headers: { Authorization: `Bearer ${sessionToken}` },
//   });
// },

// const userApi = {
//   getUsers,
// };

// export default userApi;


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

};

export default userApi;
