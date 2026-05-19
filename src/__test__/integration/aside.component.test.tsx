import { beforeEach, describe, expect, it, vi } from "vitest";
import "@testing-library/dom";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "@/src/app/(auth)/(home)/page";
import { modalStore } from "@/src/store/modalStore";

describe("AsideComponet(inte) Mobile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    modalStore.setState({ open: false });
  });

  it("shold open in hits the button Menu", async () => {
    render(<Home />);

    const user = userEvent.setup();

    // 1. Clica no botão do menu
    await user.click(screen.getByLabelText("Abrir botão"));

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral mobile",
    });

    expect(within(aside).getByText("Feed")).toBeInTheDocument();
    expect(within(aside).getByText("Favoritos")).toBeInTheDocument();
    expect(within(aside).getByText("Minhas Postagens")).toBeInTheDocument();
    expect(within(aside).getByText("Perfil")).toBeInTheDocument();
  });

  it("shold close in hits the button Menu", async () => {
    render(<Home />);
    const user = userEvent.setup();

    await user.click(screen.getByLabelText("Abrir botão"));

    expect(
      await screen.findByRole("complementary", { name: "Menu lateral mobile" }),
    ).toBeInTheDocument();

    await user.click(screen.getByLabelText("Abrir botão"));

    await waitFor(() =>
      expect(
        screen.queryByRole("complementary", { name: "Menu lateral mobile" }),
      ).not.toBeInTheDocument(),
    );
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    await userEvent.click(screen.getByLabelText("Abrir botão"));

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral mobile",
    });

    expect(within(aside).getByRole("link", { name: "Perfil" })).toHaveAttribute(
      "href",
      "/perfil",
    );
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    await userEvent.click(screen.getByLabelText("Abrir botão"));

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral mobile",
    });

    expect(
      within(aside).getByRole("link", { name: "Favoritos" }),
    ).toHaveAttribute("href", "/favorites");
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    await userEvent.click(screen.getByLabelText("Abrir botão"));

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral mobile",
    });

    expect(
      within(aside).getByRole("link", { name: "Minhas Postagens" }),
    ).toHaveAttribute("href", "/posts");
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    await userEvent.click(screen.getByLabelText("Abrir botão"));

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral mobile",
    });

    expect(within(aside).getByRole("link", { name: "Feed" })).toHaveAttribute(
      "href",
      "/",
    );
  });
});

describe("AsideComponet(inte) Dektop", () => {
  it("shold open in hits the button Menu", async () => {
    render(<Home />);

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral",
    });

    expect(within(aside).getByText("Feed")).toBeInTheDocument();
    expect(within(aside).getByText("Favoritos")).toBeInTheDocument();
    expect(within(aside).getByText("Minhas Postagens")).toBeInTheDocument();
    expect(within(aside).getByText("Perfil")).toBeInTheDocument();
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral",
    });

    expect(within(aside).getByRole("link", { name: "Perfil" })).toHaveAttribute(
      "href",
      "/perfil",
    );
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral",
    });

    expect(
      within(aside).getByRole("link", { name: "Favoritos" }),
    ).toHaveAttribute("href", "/favorites");
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral",
    });

    expect(
      within(aside).getByRole("link", { name: "Minhas Postagens" }),
    ).toHaveAttribute("href", "/posts");
  });

  it("shold render rota Perfil in hit the button Perfil", async () => {
    render(<Home />);

    const aside = await screen.findByRole("complementary", {
      name: "Menu lateral",
    });

    expect(within(aside).getByRole("link", { name: "Feed" })).toHaveAttribute(
      "href",
      "/",
    );
  });
});
