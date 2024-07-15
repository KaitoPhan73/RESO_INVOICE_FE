import z from "zod";

export const OrganizationsBody = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  representative: z.string(),
  taxCode: z.string(),
  brandId: z.string(),
  brandName: z.string(),
  code: z.string(),
});

export type TOrganizationsBody = z.infer<typeof OrganizationsBody>;

export const CreateOrganizationSchema = z.object({
  name: z.string(),
  address: z.string(),
  representative: z.string(),
  taxCode: z.string(),
  code: z.string(),
  // brandName: z.string(),
});

export type TCreateOrganizationSchema = z.TypeOf<typeof CreateOrganizationSchema>;
