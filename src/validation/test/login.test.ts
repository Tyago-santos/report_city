import { expect, test, describe } from "vitest";
import { loginSchema } from "../loginValidation.js";

describe("loginSchema", () => {
  test("should validate a valid email and password", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "password123",
    });
    expect(result.success).toBe(true);
  });

  test("should invalidate an invalid  password", () => {
    const result = loginSchema.safeParse({
      email: "test@example.com",
      password: "123",
    });
    expect(result.error?.issues[0].message).toBe(
      "Senha precisa ter pelo menos seis caracteres",
    );
  });

  test("should invalidate an invalid  password", () => {
    const result = loginSchema.safeParse({
      email: "testexample.com",
      password: "123213912",
    });
    expect(result.error?.issues[0].message).toBe("Endereço de email inválido");
  });
});
