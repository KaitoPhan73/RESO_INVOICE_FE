import { z } from "zod";

export const OrganizationAccountsBody = z.object({
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

export type TOrganizationAccounts = z.infer<typeof OrganizationAccountsBody>;


export const CreateOrganizationAccountBody = z.object({
  username: z.string(),
  name: z.string(),
  password: z.string(),
  status: z.string(),  
  role: z.number().int(),
  brandId: z.string(),
  organizationId: z.string(),

});

export type TCreateOrganizationAccountBody = z.infer<typeof CreateOrganizationAccountBody>;