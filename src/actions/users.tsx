"use server";
import { TTableResponse } from "@/types/Table";
import { TUserBase } from "@/types/User";
import { requestMock } from "@/utils/requestFetch";

export const getUsers = async (params: any) =>
  requestMock.get<TTableResponse<TUserBase>>("student/users", { params });
