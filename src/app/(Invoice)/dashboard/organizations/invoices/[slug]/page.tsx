import InvoiceApi from "@/actions/invoices";
import OrganizationsInvoiceDetailPage from "@/page/organization/invoices/detail";
import OrganizationsPartnerInvoiceHistoryPage from "@/page/organization/invoices/detailComponent/partnerInvHistory";
import ResponsePartnerPage from "@/page/organization/invoices/detailComponent/responsePartner";
import { cookies } from "next/headers";
import React from "react";

const InvoiceDetail = async ({ params }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const response = await InvoiceApi.getInvoice(params.slug, accessToken!);
  let reponsePartner;
  if (response.payload.status === 1) {
    reponsePartner = await InvoiceApi.getPartnerInvoiceHistoryByInvoiceId(
      params.slug,
      accessToken!
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {response.payload.status === 1 ? (
        <div className="col-span-3 md:col-span-3 p-4 mb-8">
          <OrganizationsPartnerInvoiceHistoryPage
            data={reponsePartner!.payload}
          />
        </div>
      ) : (
        response.payload.responsePartNer !== null && (
          <div className="col-span-3 md:col-span-3 p-4 mb-8">
            <ResponsePartnerPage data={response.payload.responsePartNer} />
          </div>
        )
      )}

      <div className="col-span-3 md:col-span-3 p-4 mb-8">
        <OrganizationsInvoiceDetailPage data={response.payload} />
      </div>

      <div className="col-span-3 md:col-span-3 p-4 mb-8"></div>
    </div>
  );
};
export default InvoiceDetail;
