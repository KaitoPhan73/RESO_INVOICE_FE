import brandApi from "@/actions/brands";
import CreateOrganizationAccountPage from "@/page/adminBrands/organizationAccounts/create";
import { cookies } from "next/headers";
import React from "react";

export default async function createOrganizationAccount(props: any) {
  const params = { 
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 100,
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
  return <CreateOrganizationAccountPage props={props} organizations={response.payload}/>;
}
