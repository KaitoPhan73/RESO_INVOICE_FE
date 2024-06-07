import z from "zod";
export const StoreBase = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  status: z.string(),
  email: z.string(),
  phone: z.string(),
  code: z.string(),
  organizationId: z.string(),
  address: z.string(),
});

export type TStore = z.TypeOf<typeof StoreBase>;
