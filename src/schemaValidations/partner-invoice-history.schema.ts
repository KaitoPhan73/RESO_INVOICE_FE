import { z } from "zod";

// Định nghĩa schema cho vnPayInvoiceStatus
const vnPayInvoiceStatusSchema = z.object({
  tvanStatus: z.number().int(),
  status: z.string(),
  invoiceStatus: z.string(),
});

export const PartnerInvoiceHistorySchema = z.object({
  id: z.string().uuid(),
  invoiceId: z.string().uuid(),
  invoiceCode: z.string(),
  vnPayInvoiceStatus: vnPayInvoiceStatusSchema,
  config: z.string(),
  createDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  partnerCode: z.string(),
});

export type TPartnerInvoiceHistoryRequest = z.TypeOf<
  typeof PartnerInvoiceHistorySchema
>;
export type TPartnerInvoiceHistoryResponse = TPartnerInvoiceHistoryRequest;
