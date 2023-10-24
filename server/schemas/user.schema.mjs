import { z } from "zod";

export const userSchema = z.object({
  name: z.string(),
  birthday: z.string().optional(),
  credentials: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
});
