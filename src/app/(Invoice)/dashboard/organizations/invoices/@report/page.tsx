import OrganizationsApi from "@/actions/organizations";
import InvoiceReportInvoicePage from "@/page/organization/invoices/invoice-report";
import { getFormattedDate } from "@/utils/utils";
import { cookies } from "next/headers";
import React from "react";

export default async function Invoices(props: any) {
  const params = {
    date: props.searchParams.createdDate
      ? props.searchParams.createdDate
      : getFormattedDate(),
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const response = await OrganizationsApi.getInvoiceReportByOrganizationId(
    organizationId,
    accessToken!,
    params
  );
  return (
    <>
      <InvoiceReportInvoicePage props={props} data={response.payload} />
    </>
  );
}
