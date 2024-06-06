import { z } from "zod";

export const InventoryItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  unitName: z.string(),
  unitPrice: z.number(),
  vatrate: z.number(),
  status: z.number().int(),
  brandId: z.string(),
});

export type TInventoryItem = z.TypeOf<typeof InventoryItemSchema>;
