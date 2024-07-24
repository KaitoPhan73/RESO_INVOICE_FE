import brandApi from "@/actions/brands";
import InvoiceInBrandPage from "@/page/adminBrands/invoices";
import { getFormattedDate } from "@/utils/utils";
import { cookies } from "next/headers";
import React from "react";

export default async function Invoices(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
    createdDate:
      props.searchParams.createdDate && props.searchParams.createdDate,
    ...(props.searchParams.status &&
      props.searchParams.status !== "all" && {
        status: props.searchParams.status,
      }),
  };
  console.log("params", params);
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).brandId;
  const response = await brandApi.getInvoiceByBrandId(
    brandId,
    accessToken!,
    params
  );
  return (
    <>
      <InvoiceInBrandPage props={props} data={response.payload} />
    </>
  );
} 
