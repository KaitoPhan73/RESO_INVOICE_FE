import brandApi from "@/actions/brands";
import OrganizationAccountsPage from "@/page/adminBrands/organizationAccounts";
import { cookies } from "next/headers";
import React from "react";

export default async function OrganizationAccounts(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).brandId;
  const response = await brandApi.getOrganizationAccountsByBrandId(
    brandId,
    accessToken!,
    params
  );

  return (
    <>
      <OrganizationAccountsPage props={props} data={response.payload} />
    </>
  );
}
