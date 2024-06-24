import { z } from "zod";

export const invoiceReportSchema = z.object({
  totalInvoice: z.number().min(0),
  pending: z.number().min(0),
  sent: z.number().min(0),
  pendingApproval: z.number().min(0),
  completed: z.number().min(0),
  failed: z.number().min(0),
});

export type TInvoiceReport = z.TypeOf<typeof invoiceReportSchema>;
