import OrganizationsApi from "@/actions/organizations";
import OrganizationsStorePage from "@/page/organization/store";
import { cookies } from "next/headers";
import React from "react";

export default async function Organizations(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const organizationId = JSON.parse(cookieStore.get("organizationId")?.value!);
  const response = await OrganizationsApi.getStoresByOrganizationById(
    organizationId,
    accessToken!,
    params
  );

  return (
    <>
      <OrganizationsStorePage props={props} data={response.payload} />
    </>
  );
}
