import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RegisterComponent from "@/src/components/RegisterComponent";

describe("RegisterComponent", () => {
  it("should render the RegisterComponent", () => {
    render(<RegisterComponent onSubmit={() => {}} />);
  });

  it("deve renderizar os inputs e buttons de RegisterComponent", () => {
    render(<RegisterComponent onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText("Ex:John Doe")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("email@example.com"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Ex: São Paulo")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Cadastrar/i }),
    ).toBeInTheDocument();
  });

  it("deve fazer o cadastro de um usuario", async () => {
    const mockSubmit = vi.fn();
    render(<RegisterComponent onSubmit={mockSubmit} />);

    await userEvent.type(
      screen.getByPlaceholderText("Ex:John Doe"),
      "John Doe",
    );

    await userEvent.type(
      screen.getByPlaceholderText("email@example.com"),
      "email@example.com",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Digite sua senha"),
      "password",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Ex: São Paulo"),
      "São Paulo",
    );

    await userEvent.click(screen.getByRole("button", { name: /Cadastrar/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      email: "email@example.com",
      password: "password",
      city: "São Paulo",
    });
  });
});
