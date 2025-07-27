import z from "zod";

export const LoginFormSchema = z.object({
    email: z.email(),
    password: z.string().min(1)
})