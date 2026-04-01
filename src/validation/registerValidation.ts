import z from "zod";

export const loginSchema = z.object({
  name: z.string().min(2, "Nome precisa ter pelo menos dois caracteres"),
  email: z.string().email("Endereço de email inválido"),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
});
