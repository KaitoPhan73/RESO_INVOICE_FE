"use server";

import { httpInvoice } from "@/lib/http";
import { TLogin, TResponseLogin } from "@/types/User";

export const checkLogin = async (body: TLogin) => {
  const res = await httpInvoice.post<any>("auth/login", body);
  console.log(res);
  return res;
};
