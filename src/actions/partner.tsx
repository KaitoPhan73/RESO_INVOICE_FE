import { httpInvoice, httpMock } from "@/lib/http";
import { TInvoiceTemplateBody } from "@/schemaValidations/invoiceTemplate.schema";
import { TPartnersBody } from "@/schemaValidations/partners.schema";
import { TInvoiceTemplateBase } from "@/types/InvoiceTemplate";
import { TPartnersBase } from "@/types/Partner";
import { TTableResponse } from "@/types/Table";

const partnersApi = {
  getPartners: (sessionToken?: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TPartnersBase>>("partners", {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  createPartners: (data: TPartnersBody) => {
    return httpInvoice.post<TPartnersBody>("partners", data);
  },
};

export default partnersApi;
