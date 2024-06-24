import InvoiceApi from "@/actions/invoices";
import OrganizationsInvoiceDetailPage from "@/page/organization/invoices/detail";
import { cookies } from "next/headers";
import React from "react";

const InvoiceDetail = async ({ params }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await InvoiceApi.getInvoice(params.slug, accessToken!);
  return <OrganizationsInvoiceDetailPage data={response.payload} />;
};
export default InvoiceDetail;
