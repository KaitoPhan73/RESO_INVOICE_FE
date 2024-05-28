"use server";
import { httpInvoice, httpMock } from "@/lib/http";
import { TTableResponse } from "@/types/Table";
import { TBrandBase } from "@/types/Brand";

export const getBrands = async (params?: any) =>
  httpInvoice.get<TTableResponse<TBrandBase>>("/brands", { params });
