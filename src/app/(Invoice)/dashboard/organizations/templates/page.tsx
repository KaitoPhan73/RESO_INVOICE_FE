import OrganizationsApi from "@/actions/organizations";
import OrganizationsInvoiceTemplatePage from "@/page/organization/invoiceTemplates";
import { cookies } from "next/headers";
import React from "react";

export default async function Templates(props: any) {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const response = await OrganizationsApi.getTemplatesByOrganizationById(
    organizationId,
    accessToken!,
    params
  );

  return (
    <>
      <OrganizationsInvoiceTemplatePage props={props} data={response.payload} />
    </>
  );
}
