import InvoiceApi from "@/actions/invoices";
import BrandsInvoiceDetailPage from "@/page/adminBrands/invoices/detail";
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {response.payload.status === 1 ? (
        <div
          className="col-span-2 md:col-span-2 p-4 md:pb-0 mb-8"
          style={{ marginBottom: "1rem" }}
        >
          <OrganizationsPartnerInvoiceHistoryPage
            data={reponsePartner!.payload}
          />
        </div>
      ) : (
        <div className="col-span-2 md:col-span-2 p-4 md:pb-0 mb-8">
          <ResponsePartnerPage data={response.payload.responsePartNer} />
        </div>
      )}

      <div className="col-span-1 md:col-span-1 p-4 md:pt-0">
        <BrandsInvoiceDetailPage data={response.payload} />
      </div>
    </div>
  );
};
export default InvoiceDetail;
