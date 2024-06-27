import { httpInvoice } from "@/lib/http";
import { TInvoice } from "@/schemaValidations/invoice.schema";
import { TPartnerInvoiceHistoryResponse } from "@/schemaValidations/partner-invoice-history.schema";
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
  updateStatusInvoice: async (id: string, params?: any) => {
    return httpInvoice.patch<TInvoice>(`invoices/${id}/update-status`, {
      params,
    });
  },
  getPartnerInvoiceHistoryByInvoiceId: async (
    id: string,
    sessionToken: string
  ) => {
    return httpInvoice.get<TPartnerInvoiceHistoryResponse>(
      `invoices/${id}/partner-invoice-history`,
      {
        headers: { Authorization: `Bearer ${sessionToken}` },
      }
    );
  },
};

export default InvoiceApi;
