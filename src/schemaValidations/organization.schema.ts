import { z } from "zod";

export const OrganizationSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  representative: z.string(),
  taxCode: z.string(),
  brandId: z.string(),
  brandName: z.string(),
  code: z.string(),
});

export type TOrganization = z.TypeOf<typeof OrganizationSchema>;
