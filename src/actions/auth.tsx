"use server";

import { TLogin, TResponseLogin } from "@/types/User";
import { requestInvoice } from "@/utils/requestFetch";

export const checkLogin = (body: TLogin) =>
  requestInvoice.post<TResponseLogin>("auth/login", body);
