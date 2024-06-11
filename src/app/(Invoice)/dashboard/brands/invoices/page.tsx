import brandApi from "@/actions/brands";
import InvoiceInBrandPage from "@/page/adminBrands/invoices";
import { cookies } from "next/headers";
import React from "react";

export default async function InvoicesInBrand(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
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
