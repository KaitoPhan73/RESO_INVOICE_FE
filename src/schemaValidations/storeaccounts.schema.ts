import z from "zod";
export const StoreAccountsBase = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  status: z.number().int(),
  roleId: z.string(),
  brandId: z.string(),
  organizationId: z.string(),
});

export type TStoreAccountsBase = z.TypeOf<typeof StoreAccountsBase>;
