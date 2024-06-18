import { z } from "zod";

export const InvoiceDetailSchema = z.object({
  receiptCode: z.string(),
  buyerCustomerCode: z.string(),
  buyerTaxCode: z.string(),
  buyerName: z.string(),
  buyerAddress: z.string(),
  buyerFullName: z.string(),
  buyerPhoneNumber: z.string(),
  buyerEmail: z.string().email(), // Ensure email format
  buyerBankName: z.string(),
  buyerBankAccountNumber: z.string(),
  invoiceNote: z.string(),
  internalNote: z.string(),
  discount: z.boolean(),
  code: z.string(),
  quantity: z.number().int(),
  totalAmount: z.number(),
  discountAmount: z.number(),
  finalAmount: z.number(),
});

export const InvoiceSchema = z.object({
  id: z.string(),
  invoiceCode: z.string(),
  createdDate: z.string().datetime(),
  lookupCode: z.string().nullable(), // Allow null value
  type: z.number().int(),
  status: z.number().int(),
  paymentMethod: z.string(),
  currencyUnit: z.string(), // Renamed from currencyCode
  currencyExchangeRate: z.number(), // Renamed from exchangeRate
  totalTaxAmount: z.number(),
  totalAmountAfterTax: z.number(),
  totalSaleAmount: z.number(),
  totalDiscountAmount: z.number(),
  totalAmountWithoutTax: z.number(),
  totalAmount: z.number(),
  billCode: z.string(),
  templateId: z.string(),
  partnerId: z.string(),
  storeId: z.string(),
  invoiceDetail: InvoiceDetailSchema,
  items: z.array(
    z.object({
      ordinalNumber: z.number().int(),
      code: z.string(),
      name: z.string(),
      quantity: z.number().int(),
      property: z.string(),
      unit: z.string(),
      price: z.number(),
      discountRate: z.number(),
      discountAmount: z.number(),
      amountWithoutDiscount: z.number(),
      amount: z.number(),
      taxAmount: z.number(),
      amountAfterTax: z.number(),
      tax: z.string(),
    })
  ),
  taxTypes: z.array(
    z.object({
      tax: z.string(),
      amountWithoutTax: z.number(),
      taxAmount: z.number(),
    })
  ),
  responsePartNer: z.object({
    code: z.string(),
    message: z.string(),
    data: z.nullable(z.unknown()),
  }),
});

export type TInvoice = z.TypeOf<typeof InvoiceSchema>;
