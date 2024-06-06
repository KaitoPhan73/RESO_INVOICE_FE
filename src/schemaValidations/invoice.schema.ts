import { z } from "zod";

export const InvoiceDetailSchema = z.object({
  itemType: z.number().int(),
  lineNumber: z.number().int(),
  sortOrder: z.number().int(),
  itemCode: z.string(),
  itemName: z.string(),
  unitName: z.string(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  discountRate: z.number(),
  discountAmountOC: z.number(),
  discountAmount: z.number(),
  amountOC: z.number(),
  amount: z.number(),
  amountWithoutVATOC: z.number(),
  amountWithoutVAT: z.number(),
  vatRateName: z.string(),
  vatAmountOC: z.number(),
  vatAmount: z.number(),
});

export const InvoiceSchema = z.object({
  id: z.string(),
  invoiceCode: z.string(),
  createdDate: z.string().datetime(),
  updatedDate: z.string().datetime(),
  type: z.number().int(),
  status: z.number().int(),
  paymentMethod: z.string(),
  currencyCode: z.string(),
  exchangeRate: z.number(),
  discountRate: z.number(),
  vatrate: z.number(),
  totalSaleAmount: z.number(),
  totalDiscountAmount: z.number(),
  totalAmountWithoutVat: z.number(),
  totalVatamount: z.number(),
  totalAmount: z.number(),
  paymentStatus: z.number().int(),
  templateId: z.string(),
  invoiceDetails: z.array(InvoiceDetailSchema),
  partnerId: z.string(),
  storeId: z.string(),
});

export type TInvoice = z.TypeOf<typeof InvoiceSchema>;
