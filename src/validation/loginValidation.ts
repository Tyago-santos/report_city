import z from "zod";

export const loginSchema = z.object({
  password: z.string().min(6, "Senha precisa ter pelo menos seis caracteres"),
  email: z.string().email("Endereço de email inválido"),
});
