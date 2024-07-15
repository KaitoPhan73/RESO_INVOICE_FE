import brandApi from "@/actions/brands";
import OrganizationsApi from "@/actions/organizations";
import OrganizationsInBrandPage from "@/page/adminBrands/organizations";
import OrganizationsInvoicePage from "@/page/organization/invoices";
import { cookies } from "next/headers";
import React from "react";

export default async function OrganizationsInBrand(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).brandId;
  const response = await brandApi.getOrganizationByBrandId(
    brandId,
    accessToken!, 
    params
  );
  console.log("orrr:", response);

  return (
    <>
      <OrganizationsInBrandPage props={props} data={response.payload} />
    </>
  );
}
