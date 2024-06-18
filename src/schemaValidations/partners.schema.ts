import z from "zod";
export const PartnersBody = z.object({
  name: z.string(),
  description: z.string(),
  apiUrl: z.string(),
  type: z.number().int(),
  environment: z.number().int(),
  schemaConfig: z.string(),
  code: z.string(),
  username: z.string(),
  password: z.string(),
});

export type TPartnersBody = z.TypeOf<typeof PartnersBody>;
