import { z } from "zod";

export const OrganizationAccountsSchema = z.object({
  username: z.string().min(1),
  name: z.string(),
  role: z.number(),
  status: z.string(),
  organizationId: z.string(),
  password: z.string().min(1),
  brandId: z.string(),
});

export type TOrganizationAccountsRequest = z.TypeOf<typeof OrganizationAccountsSchema>;

export type TOrganizationAccountsResponse = TOrganizationAccountsRequest & {
  id: string;
  organizationCode: string;
  brandCode: string;
};
