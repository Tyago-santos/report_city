import { describe, it, expect, vi } from "vitest";
import LoginComponent from "@/src/components/LoginComponent";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("LoginComponent", () => {
  it("should render the component", () => {
    expect(LoginComponent).toBeTruthy();
  });

  it("should render the component with props", () => {
    render(<LoginComponent onSubmit={() => {}} />);
    expect(
      screen.getByPlaceholderText("email@example.com"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
  });

  it("deve validar o formulario", async () => {
    const mockSubmit = vi.fn();
    const user = userEvent.setup();

    render(<LoginComponent onSubmit={mockSubmit} />);

    const emailInput = screen.getByPlaceholderText("email@example.com");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");

    await user.type(emailInput, "email@example.com");
    await user.type(passwordInput, "password");

    await user.click(screen.getByRole("button", { name: /Logar/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      email: "email@example.com",
      password: "password",
    });
  });

  it("deve não validar o formulario", async () => {
    const mockSubmit = vi.fn();
    const user = userEvent.setup();

    render(<LoginComponent onSubmit={mockSubmit} />);

    const emailInput = screen.getByPlaceholderText("email@example.com");
    const passwordInput = screen.getByPlaceholderText("Digite sua senha");

    await user.type(emailInput, "emailexamplecom");
    await user.type(passwordInput, "1234");

    await user.click(screen.getByRole("button", { name: /Logar/i }));

    expect(screen.getByText("Endereço de email inválido")).toBeInTheDocument();

    expect(
      screen.getByText("Senha precisa ter pelo menos seis caracteres"),
    ).toBeInTheDocument();

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
