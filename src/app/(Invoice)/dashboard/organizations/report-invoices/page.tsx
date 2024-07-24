import InvoiceApi from "@/actions/invoices";
import organizationsApi from "@/actions/organizations";
import StoresApi from "@/actions/store";
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
    storeId: props.searchParams.store && props.searchParams.store,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const responseInvoicePaymentReport =
    organizationsApi.getInvoiceReportInDateByOrganizationId(
      organizationId,
      accessToken!,
      params
    );
  const responseStores = await organizationsApi.getStoresByOrganizationById(
    organizationId,
    accessToken!,
    {
      page: 1,
      size: 1000,
    }
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
    selects: responseStores.payload.items,
  };
  return <ReportInvoce data={data} />;
};

export default page;
