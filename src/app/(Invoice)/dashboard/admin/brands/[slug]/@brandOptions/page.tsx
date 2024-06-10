import brandApi from "@/actions/brands";
import MiddleBrandTab from "@/page/adminSys/brands/tabDetail/middleTab";
import UpdateBrandPage from "@/page/adminSys/brands/update";
import { cookies } from "next/headers";
import React from "react";

export default async function BrandOptions({
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
    inventoryItems: resInventoryItems.payload,
    invoices: resInvoices.payload,
    organizations: resOrganizations.payload,
    users: resUsers.payload,
    brandId: params.slug,
  };
  return <MiddleBrandTab data={data} />;
}
