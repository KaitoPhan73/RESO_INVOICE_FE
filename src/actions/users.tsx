import { httpMock } from "@/lib/http";
import { TTableResponse } from "@/types/Table";
import { TUserBase } from "@/types/User";

const getUsers = async (params?: any) => {
  "use server";
  return httpMock.get<any>("student/users", { params });
};

const userApi = {
  getUsers,
};

export default userApi;
