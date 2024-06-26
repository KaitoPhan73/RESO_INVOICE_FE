import { z } from "zod";

export const InvoiceDetailSchema = z.object({
  receiptCode: z.string(),
  buyerCustomerCode: z.string(),
  buyerTaxCode: z.string().nullable(), // Nullable because it can be null in the JSON
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
  createdDate: z.string(), // Assuming you handle datetime format in the application layer
  lookupCode: z.string().nullable(), // Nullable because it can be null in the JSON
  type: z.number().int(),
  status: z.number().int(),
  paymentMethod: z.string(),
  currencyUnit: z.string(), // Renamed from currencyUnit
  currencyExchangeRate: z.number(), // Ensure it's a number
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
  responsePartNer: z.nullable(z.unknown()), // Nullable because it can be null in the JSON
});

export type TInvoice = z.TypeOf<typeof InvoiceSchema>;
