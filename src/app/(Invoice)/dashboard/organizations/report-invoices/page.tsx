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

  console.log("props.searchParams.fromDate ", props.searchParams.fromDate);
  console.log("props.searchParams.toDate ", props.searchParams.toDate);
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const storeUser = cookieStore.get("user")?.value;
  const organizationId = JSON.parse(storeUser!).organizationId;
  const responseAll =
    await organizationsApi.getInvoiceReportInDateByOrganizationId(
      organizationId,
      accessToken!,
      params
    );
  //   const responseTotal = organizationsApi.getInvoiceReportByOrganizationId(
  //     organizationId,
  //     accessToken!
  //   );
  const data = {
    reportItems: responseAll.payload,
    // reportTotal: responseAll.payload,
  };
  return <ReportInvoce data={data} />;
};

export default page;
