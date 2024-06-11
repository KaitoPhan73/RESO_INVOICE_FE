import brandApi from "@/actions/brands";
import MiddleBrandTab from "@/page/adminSys/brands/tabDetail/middleTab";
import UpdateBrandPage from "@/page/adminSys/brands/update";
import { cookies } from "next/headers";
import React from "react";

export default async function BrandOptions(props: any) {
  const defaultParams = {
    page: 1,
    size: 10,
  };
  console.log("props", props);
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  // const resInventoryItems = await brandApi.getInventoryItemsByBrandId(
  //   params.slug,
  //   accessToken!,
  //   defaultParams
  // );
  const resInvoices = await brandApi.getInvoiceByBrandId(
    props.params.slug,
    accessToken!,
    defaultParams
  );
  const resOrganizations = await brandApi.getOrganizationByBrandId(
    props.params.slug,
    accessToken!,
    defaultParams
  );
  const resOrganizationsAccounts =
    await brandApi.getOrganizationAccountsByBrandId(
      props.params.slug,
      accessToken!,
      defaultParams
    );
  // const resUsers = await brandApi.getUserByBrandId(
  //   params.slug,
  //   accessToken!,
  //   defaultParams
  // );

  const data = {
    // inventoryItems: resInventoryItems.payload,
    invoices: resInvoices.payload,
    organizations: resOrganizations.payload,
    organizationsAccounts: resOrganizationsAccounts.payload,
    // users: resUsers.payload,
    brandId: props.params.slug,
  };
  return <MiddleBrandTab data={data} props={props} />;
}
