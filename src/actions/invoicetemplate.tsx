import { httpInvoice, httpMock } from "@/lib/http";
import { TInvoiceTemplateBody } from "@/schemaValidations/invoiceTemplate.schema";
import { TInvoiceTemplateBase } from "@/types/InvoiceTemplate";
import { TTableResponse } from "@/types/Table";

const invoiceTemplateApi = {
  getInvoiceTemplate: (sessionToken?: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TInvoiceTemplateBase>>("templates", {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  createInvoiceTemplate: (data: TInvoiceTemplateBody) => {
    return httpInvoice.post<TInvoiceTemplateBody>("templates", data);
  },
};

export default invoiceTemplateApi;
