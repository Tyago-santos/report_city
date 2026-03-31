import z from "zod";

export const loginSchema = z.object({
  name: z.string().min(2, "Nome precisa ter pelo menos dois caracteres"),
  email: z.string().email("Endereço de email inválido"),
});
