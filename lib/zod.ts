import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(1, "Username must be at least one character.")
    .max(10, "Username must be less than 10 characters."),
  password: z
    .string()
    .min(1, "Password must be at least one charater")
    .max(20, "Password must be less than 20 characters."),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
