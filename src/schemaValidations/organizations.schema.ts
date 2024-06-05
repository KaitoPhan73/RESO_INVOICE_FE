import z from "zod";

export const OrganizationsBody = z.object({
  name: z.string(),
  address: z.string(),
  representative: z.string(),
  taxCode: z.string(),
  brandId: z.string(),
  brandName: z.string(),
});

export type TOrganizationsBody = z.infer<typeof OrganizationsBody>;
