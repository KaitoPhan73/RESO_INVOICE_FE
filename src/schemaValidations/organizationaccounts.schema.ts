import { z } from "zod";

export const OrganizationAccountsSchema = z.object({
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

export type TOrganizationAccounts = z.infer<typeof OrganizationAccountsSchema>;
