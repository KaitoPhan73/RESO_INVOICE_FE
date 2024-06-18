import { httpInvoice } from "@/lib/http";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TTableResponse } from "@/types/Table";

const InvoiceApi = {
  getInvoices: async (sessionToken: string, params?: any) => {
    return httpInvoice.get<TTableResponse<TInvoice>>("invoices", {
      params,
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  getInvoice: async (id: string, sessionToken: string) => {
    return httpInvoice.get<TInvoice>(`invoices/${id}`, {
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  createInvoice: async (data: TInvoice, sessionToken: string) => {
    return httpInvoice.post<TInvoice>("invoices", data, {
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
  updateInvoice: async (id: string, data: TInvoice, sessionToken: string) => {
    return httpInvoice.put<TInvoice>(`invoices/${id}`, data, {
      headers: { Authorization: `Bearer ${sessionToken}` },
    });
  },
};

export default InvoiceApi;
