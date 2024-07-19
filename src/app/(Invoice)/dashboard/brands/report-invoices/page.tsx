import brandApi from "@/actions/brands";
import { ReportInvoce } from "@/page/organization/report";
import { getFormattedDate } from "@/utils/utils";
import { se } from "date-fns/locale";
import { cookies } from "next/headers";
import React from "react";

const page = async (props: any) => {
  const params = {
    page: props.searchParams.page ? +props.searchParams.page : 1,
    size: props.searchParams.size ? +props.searchParams.size : 100,
    fromDate: props.searchParams.fromDate && props.searchParams.fromDate,
    toDate: props.searchParams.toDate && props.searchParams.toDate,
    organizationId:
      props.searchParams.organization && props.searchParams.organization,
  };
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const brandId = JSON.parse(storeUser!).brandId;
  const responseInvoicePaymentReport =
    await brandApi.getInvoiceReportInDateByBrandId(
      brandId,
      accessToken!,
      params
    );
  const responseOrganizations = await brandApi.getOrganizationByBrandId(
    brandId,
    accessToken!,
    {
      page: 1,
      size: 1000,
    }
  );
  const [invoicePaymentReport] = await Promise.all([
    responseInvoicePaymentReport,
    // responseInvoiceReport,
  ]);
  const data = {
    reportItems: invoicePaymentReport.payload,
    reportInvoice: null,
    selects: responseOrganizations.payload.items,
  };
  return <ReportInvoce data={data} />;
};

export default page;
