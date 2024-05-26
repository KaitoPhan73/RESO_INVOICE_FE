"use server";
import { httpMock } from "@/lib/http";
import { TTableResponse } from "@/types/Table";
import { TUserBase } from "@/types/User";

export const getUsers = async (params: any) =>
  httpMock.get<TTableResponse<TUserBase>>("student/users", { params });
