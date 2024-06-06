import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  name: z.string(),
  role: z.number().int(),
  status: z.number().int(),
  storeId: z.string(),
  storeCode: z.string(),
  brandId: z.string(),
  brandCode: z.string(),
});

export type TUser = z.TypeOf<typeof UserSchema>;
