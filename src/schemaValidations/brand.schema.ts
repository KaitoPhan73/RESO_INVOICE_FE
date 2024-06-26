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

export type TBrandBody = z.TypeOf<typeof BrandBody>;

// export const SelectBrandBody = z.object({
//   id: z.string(),
//   name: z.string(),
//   code: z.string(),
//   // role: string;
//   taxCode: z.string(),
//   descriptions: z.string(),
//   status: z.number().int(),
//   secretKey: z.string(),
// });
// export type TSelectBrandBody = z.TypeOf<typeof SelectBrandBody>;


export const BrandAccountBody = z.object({
  brandId: z.string(),
  username: z.string(),
  name: z.string(),
  password: z.string(),
  status: z.number().int(),  
  role: z.number().int(),  
});

export type TBrandAccountBody = z.infer<typeof BrandAccountBody>;

export const BrandPartnerBody = z.object({
  brandId: z.string(),
  partnerId: z.string(),
  status: z.number().int(),
  config: z.string(),
});

export type TBrandPartnerBody = z.TypeOf<typeof BrandPartnerBody>;

export const CreateBrandBody = z.object({
  name: z.string(),
  code: z.string(),
  status: z.number().int(),
  taxCode: z.string(),
  descriptions: z.string(),
  secretKey: z.string(),
});
export type TCreateBrandBody = z.TypeOf<typeof CreateBrandBody>;
