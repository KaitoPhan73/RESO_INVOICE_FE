import z from "zod";
export const InvoiceTemplateBody = z.object({
  organizationId: z.string().uuid(),
  organizationName: z.string(),
  templateName: z.string(),
  templateType: z.number().int(),
  invSeries: z.string(),
  invoiceType: z.number().int(),
  status: z.number().int(),
});

export type TInvoiceTemplateBody = z.TypeOf<typeof InvoiceTemplateBody>;
