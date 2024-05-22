"use server";

import { TLogin, TResponseLogin } from "@/types/User";
import { requestInvoice } from "@/utils/requestFetch";
import { NextResponse } from "next/server";

export const checkLogin = async (body: TLogin) => {
  const res = await requestInvoice.post<any>("auth/login", body);
  console.log(res);
  return res;
};
