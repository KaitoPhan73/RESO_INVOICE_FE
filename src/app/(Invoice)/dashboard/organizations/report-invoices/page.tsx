import InvoiceApi from "@/actions/invoices";
import organizationsApi from "@/actions/organizations";
import { ReportInvoce } from "@/page/organization/report";
import { getFormattedDate } from "@/utils/utils";
import { cookies } from "next/headers";
import React from "react";

const page = async (props: any) => {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 100,
    fromDate: props.searchParams.fromDate && props.searchParams.fromDate,
    toDate: props.searchParams.toDate && props.searchParams.toDate,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const responseInvoicePaymentReport =
    await organizationsApi.getInvoiceReportInDateByOrganizationId(
      organizationId,
      accessToken!,
      params
    );
  const responseInvoiceReport =
    organizationsApi.getInvoiceReportByOrganizationId(
      organizationId,
      accessToken!,
      params
    );
  const [invoicePaymentReport, invoiceReport] = await Promise.all([
    responseInvoicePaymentReport,
    responseInvoiceReport,
  ]);
  const data = {
    reportItems: invoicePaymentReport.payload,
    reportInvoice: invoiceReport.payload,
  };
  return <ReportInvoce data={data} />;
};

export default page;
