import organizationsApi from "@/actions/organizations";
import OrganizationsApi from "@/actions/organizations";
import OrganizationsStorePage from "@/page/organization/store";
import StoreAccountsPage from "@/page/organization/store-account";
import { cookies } from "next/headers";
import React from "react";

export default async function StoresAccounts(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const response = await organizationsApi.getStoreAccountsByOrganizationById(
    organizationId,
    accessToken!,
    params
  );
  console.log("ressssspppppppp:", response.payload);

  return (
    <>
      <StoreAccountsPage props={props} data={response.payload} />
    </>
  );
}
