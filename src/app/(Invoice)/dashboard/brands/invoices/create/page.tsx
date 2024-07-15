import organizationsApi from "@/actions/organizations";
import partnersApi from "@/actions/partners";
import OrganizationsInvoiceCreatePage from "@/page/organization/invoices/create";
import { cookies } from "next/headers";
import React from "react";

export default async function CreateInvoice(props: any) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const params = {
    page: 1,
    pageSize: 1000,
  };

  const stores = await organizationsApi.getStoresByOrganizationById(
    organizationId,
    accessToken!,
    params
  );
  const templates = await organizationsApi.getTemplatesByOrganizationById(
    organizationId,
    accessToken!,
    params
  );
  //   const partners = partnersApi.getPartners(params);
  const data = {
    stores: stores.payload.items,
    templates: templates.payload.items,
  };

  return <OrganizationsInvoiceCreatePage data={data} props={props} />;
}
