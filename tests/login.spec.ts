import { test, expect } from "@playwright/test";

test.describe("user login", () => {
  test("login with valid credentials", async ({ page }) => {
    await page.goto("http://localhost:3000/login");

    await page.getByPlaceholder("email@example.com").fill("teste@gmail.com");
    await page.getByPlaceholder("Digite sua senha").fill("123456");

    await page.getByRole("button", { name: /Logar/i }).click();

    await expect(page.getByText("Report City")).toBeVisible();
  });
});
