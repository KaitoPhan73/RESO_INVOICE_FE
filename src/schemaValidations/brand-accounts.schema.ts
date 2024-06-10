import { z } from "zod";

export const BrandAccountsSchema = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string(),
  role: z.number().int(),
  status: z.number().int(),
  organizationId: z.string(),
  organizationCode: z.string(),
  brandId: z.string(),
  brandCode: z.string(),
});

export type TBrandAccounts = z.infer<typeof BrandAccountsSchema>;