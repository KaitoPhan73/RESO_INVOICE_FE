import InvoiceApi from "@/actions/invoices";
import OrganizationsPartnerInvoiceHistoryPage from "@/page/organization/invoices/detailComponent/partnerInvHistory";
import { cookies } from "next/headers";
import React from "react";

const PartnerInvoiceHisDetail = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await InvoiceApi.getPartnerInvoiceHistoryByInvoiceId(
    params.slug,
    accessToken!
  );
  return <OrganizationsPartnerInvoiceHistoryPage data={response.payload} />;
};
export default PartnerInvoiceHisDetail;
