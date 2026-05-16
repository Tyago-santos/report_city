import { describe, expect, it } from "vitest";
import { registerSchema } from "../registerValidation";

describe("registerValidation", () => {
  it("deve criar usuario novo sem erro", () => {
    const data = {
      name: "tiago",
      email: "exemplo@gmail.com",
      password: "123456",
      city: "Bahia",
    };

    const result = registerSchema.safeParse(data);

    expect(result.success).toBe(true);
    expect(result.data).toMatchObject(data);
  });

  it("deve não válidar o name", () => {
    const data = {
      name: "t",
      email: "exemplo@gmail.com",
      password: "123456",
      city: "Bahia",
    };

    const result = registerSchema.safeParse(data);

    expect(result.success).toEqual(false);
    expect(result.error?.issues[0].message).toBe(
      "Nome precisa ter pelo menos dois caracteres",
    );
  });

  it("deve não válidar o email", () => {
    const data = {
      name: "tiago",
      email: "exemplomail.com",
      password: "123456",
      city: "Bahia",
    };

    const result = registerSchema.safeParse(data);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Endereço de email inválido");
  });

  it("deve não válidar senha", () => {
    const data = {
      name: "tiago",
      email: "exemplo@gmail.com",
      password: "12345",
      city: "Bahia",
    };

    const result = registerSchema.safeParse(data);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve conter pelo menos 6 caracteres",
    );
  });

  it("deve não válidar cidade", () => {
    const data = {
      name: "tiago",
      email: "exemplo@gmail.com",
      password: "123456",
      city: "B",
    };

    const result = registerSchema.safeParse(data);

    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "Cidade precisa ter pelo menos dois caracteres",
    );
  });
});
