import z from "zod";

export const LoginFormSchema = z.object({
    email: z.email(),
    password: z.string().min(1)
});

export const RegisterFormSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8)
})