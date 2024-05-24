"use server";
import { httpMock } from "@/lib/http";
import { TTableResponse } from "@/types/Table";
import { TUserBase } from "@/types/User";
import { requestMock } from "@/utils/requestFetch";

export const getUsers = async (params: any) =>
  httpMock.get<TTableResponse<TUserBase>>("student/users", { params });
