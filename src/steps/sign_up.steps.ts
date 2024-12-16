import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../utils/hooks";
import { expect } from "@playwright/test";

Given("I enter username", async function () {
  await page.locator("#ContentPlaceHolder1_txtUserName").fill("Tester");
});

Given("I enter email", async function () {
  await page.locator("#ContentPlaceHolder1_txtEmail").fill("test@mailinator.com");
});

Given("I confirm email", async function () {
  await page.locator("#ContentPlaceHolder1_txtConfirmEmail").fill("test@mailinator.com");
});

Given("I enter password", async function () {
  await page.locator("#ContentPlaceHolder1_txtPassword").fill("Test123!");
});

Given("I confirm password", async function () {
  await page.locator("#ContentPlaceHolder1_txtPassword2").fill("Test123!");
});

Given("I check terms checkbox", async function () {
  await page.locator("#ContentPlaceHolder1_MyCheckBox").click();
});

Given("I check newsletter checkbox", async function () {
  await page.locator("#ContentPlaceHolder1_SubscribeNewsletter").click();
});

When("I click Create an Account button", async function () {
  await page.locator("#ContentPlaceHolder1_btnRegister").click();
});

Then("Please enter Username. error is visible", async function () {
  await expect(page.locator("#ContentPlaceHolder1_txtUserName-error")).toHaveText("Please enter Username.");
});

Then("Please enter a valid email address. error is visible", async function () {
  await expect(page.locator("#ContentPlaceHolder1_txtEmail-error")).toHaveText("Please enter a valid email address.");
});

Then("Please re-enter your email address. error is visible", async function () {
  await expect(page.locator("#ContentPlaceHolder1_txtConfirmEmail-error")).toHaveText("Please re-enter your email address.");
});

Then("Please enter Password. error is visible", async function () {
  await expect(page.locator("#ContentPlaceHolder1_txtPassword-error")).toHaveText("Please enter Password.");
});

Then(
  "Your password must be at least 8 characters long. error is visible", async function () {
  await expect(page.locator("#ContentPlaceHolder1_txtPassword2-error")).toHaveText("Your password must be at least 8 characters long.");
});

Then("Please accept our Terms and Conditions. error is visible", async function () {
  await expect(page.locator('//div[text()="Please accept our Terms and Conditions."]')).toHaveText("Please accept our Terms and Conditions.");
});

Then("Email address does not match. error is visible", async function () {
  await expect(page.locator('//div[text()="Email address does not match."]')).toHaveText("Email address does not match.");
});

Then("Password does not match, please check again. error is visible", async function () {
  await expect(page.locator('//div[text()="Please accept our Terms and Conditions."]')).toHaveText("Please accept our Terms and Conditions.");
});

// todo: replace with methods
Then("Verify Your Email text is visible", async function () {
  console.log("Verify Your Email text is visible");
});

Then("I navigate to mailinator", async function () {
  console.log("I navigate to mailinator");
});

Then("I click on confirmation link from inbox", async function () {
  console.log("I click on confirmation link from inbox");
});

Then("Welcome to Etherscan! text is visible", async function () {
  console.log("Welcome to Etherscan! text is visible");
});

Then("I click on sign in button", async function () {
  console.log("I click on sign in button");
});

Then("I click Login button", async function () {
  console.log("I click Login button");
});

Then("I should be on account overview page", async function () {
  console.log("I should be on account overview page");
});


