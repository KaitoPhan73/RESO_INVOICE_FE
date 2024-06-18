import z from "zod";
export const BrandBody = z.object({
  brandId: z.string(),
  name: z.string(),
  code: z.string(),
  status: z.number().int(),
  taxCode: z.string(),
  descriptions: z.string(),
  secretKey: z.string(),
});

export const BrandAccountBody = z.object({
  brandId: z.string(),
  username: z.string(),
  name: z.string(),
  password: z.string(),
  status: z.number().int(),
  role: z.number().int(),
});

export type TBrandAccountBody = z.infer<typeof BrandAccountBody>;

export type TBrandBody = z.TypeOf<typeof BrandBody>;

export const BrandPartnerBody = z.object({
  brandId: z.string(),
  partnerId: z.string(),
  status: z.number().int(),
  config: z.string(),
});

export type TBrandPartnerBody = z.TypeOf<typeof BrandPartnerBody>;
