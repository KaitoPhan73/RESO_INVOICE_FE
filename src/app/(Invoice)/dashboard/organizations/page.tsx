import OrganizationsApi from "@/actions/organizations";
import OrganizationsPage from "@/page/organizations";
import { cookies } from "next/headers";
import React from "react";

export default async function Organizations(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).brandId;

  const response = await OrganizationsApi.getOrganizationByBrandId(
    brandId,
    accessToken!  ,
    params,
  );
  console.log("hehehe:",accessToken);

  return (
    <>
      <OrganizationsPage props={props} data={response.payload} />
    </>
  );
}
