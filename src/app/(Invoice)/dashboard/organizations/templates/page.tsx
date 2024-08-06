import OrganizationsApi from "@/actions/organizations";
import OrganizationsInvoiceTemplatePage from "@/page/organization/invoiceTemplates";
import { cookies } from "next/headers";
import React from "react";

export default async function Templates({
  params,
}: {
  params: { slug: string };
}) {
  // const cookieStore = cookies();
  // const accessToken = cookieStore.get("accessToken")?.value;
  // const data = await OrganizationsApi.getTemplatesByOrganizationById(params.slug, accessToken);

  return (
    <>
      <OrganizationsInvoiceTemplatePage />
    </>
  );
}
