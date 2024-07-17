import { z } from "zod";

export const invoiceReportSchema = z.object({
  totalInvoice: z.number().min(0).optional(),
  totalInvoiceReportInDate: z.number().min(0).optional(),
  draft: z.number().min(0).optional(),
  success: z.number().min(0).optional(),
  sent: z.number().min(0).optional(),
  pendingApproval: z.number().min(0).optional(),
  completed: z.number().min(0).optional(),
  failed: z.number().min(0).optional(),
  pending: z.number().min(0).optional(),
  retryPending: z.number().min(0).optional(),
  replaced: z.number().min(0).optional(),
});

export type TInvoiceReport = z.infer<typeof invoiceReportSchema>;
