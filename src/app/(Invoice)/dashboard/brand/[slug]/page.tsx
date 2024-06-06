import brandApi from "@/actions/brands";
import UpdateBrandPage from "@/page/brands/update";
import { cookies } from "next/headers";
import React from "react";

export default async function UserDetail({
  params,
}: {
  params: { slug: string };
}) {
  const defaultParams = {
    page: 1,
    size: 10,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await brandApi.getBrandById(params.slug, accessToken!);

  const resInventoryItems = await brandApi.getInventoryItemsByBrandId(
    params.slug,
    accessToken!,
    defaultParams
  );
  const resInvoices = await brandApi.getInvoiceByBrandId(
    params.slug,
    accessToken!,
    defaultParams
  );
  const resOrganizations = await brandApi.getOrganizationByBrandId(
    params.slug,
    accessToken!,
    defaultParams
  );
  const resUsers = await brandApi.getUserByBrandId(
    params.slug,
    accessToken!,
    defaultParams
  );

  const data = {
    detail: response.payload,
    inventoryItems: resInventoryItems.payload,
    invoices: resInvoices.payload,
    organizations: resOrganizations.payload,
    users: resUsers.payload,
  };
  return <UpdateBrandPage data={data} />;
}
