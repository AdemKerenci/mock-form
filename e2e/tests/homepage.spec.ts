import { test, expect } from '@playwright/test';

test("should disable back button on the first page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("back-button")).toBeDisabled();
});

test("should give error when name is not filled on the first page", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByTestId("submit-button").click();
  await expect(
    page.getByTestId("step-1-fullName").getByRole("textbox")
  ).toHaveAttribute("aria-invalid", "true");
});

test("should give pass to second page when name is filled", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("step-1-fullName")
    .getByRole("textbox")
    .fill("test-full-name");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-2-email")).toBeVisible();
  await expect(page.getByTestId("back-button")).toBeEnabled();
});

test("should give error when email is not filled in second page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("step-1-fullName")
    .getByRole("textbox")
    .fill("test-fullname");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-2-email")).toBeVisible();

  await page.getByTestId("submit-button").click();
  await expect(
    page.getByTestId("step-2-email").getByRole("textbox")
  ).toHaveAttribute("aria-invalid", "true");
});

test("should give error when valid email is not supplied in second page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("step-1-fullName")
    .getByRole("textbox")
    .fill("test-fullname");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-2-email")).toBeVisible();

  await page
    .getByTestId("step-2-email")
    .getByRole("textbox")
    .fill("non-valid-email");
  await page.getByTestId("submit-button").click();
  await expect(
    page.getByTestId("step-2-email").getByRole("textbox")
  ).toHaveAttribute("aria-invalid", "true");
});

test("should give error when phone number is not filled in third page", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByTestId("step-1-fullName")
    .getByRole("textbox")
    .fill("test-full-name");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-2-email")).toBeVisible();

  await page
    .getByTestId("step-2-email")
    .getByRole("textbox")
    .fill("test-email@email.com");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-3-phoneNumber")).toBeVisible();

  await page.getByTestId("submit-button").click();
  await expect(
    page.getByTestId("step-3-phoneNumber").getByRole("textbox")
  ).toHaveAttribute("aria-invalid", "true");
});

test("happy path of the form and reset button test", async ({ page }) => {
  await page.goto("/");
  await page
    .getByTestId("step-1-fullName")
    .getByRole("textbox")
    .fill("test-full-name");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-2-email")).toBeVisible();

  await page
    .getByTestId("step-2-email")
    .getByRole("textbox")
    .fill("test-email@email.com");
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("step-3-phoneNumber")).toBeVisible();

  await page.getByTestId("submit-button").click();
  await page
    .getByTestId("step-3-phoneNumber")
    .getByRole("textbox")
    .fill("+4911111111");
  await page.getByTestId("submit-button").click();

  await page
    .getByTestId("step-4-salaryRange-3000-4000")
    .getByRole("radio")
    .click();
  await page.getByTestId("submit-button").click();
  await expect(page.getByTestId("reset-button")).toBeVisible();

  await expect(
    page.getByTestId("final-step-email").getByRole("textbox")
  ).toHaveValue("test-email@email.com");
  await expect(
    page.getByTestId("final-step-fullName").getByRole("textbox")
  ).toHaveValue("test-full-name");
  await expect(
    page.getByTestId("final-step-phoneNumber").getByRole("textbox")
  ).toHaveValue("+4911111111");
  await expect(
    page.getByTestId("final-step-salaryRange").getByRole("textbox")
  ).toHaveValue("3000-4000");

  await page.getByTestId("reset-button").click();
  await expect(page.getByTestId("step-1-fullName")).toBeVisible();
});
