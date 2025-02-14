import { Given, When, Then } from "@cucumber/cucumber";
import { pages } from "../utils/instances";

Given("I enter username", async function () {
  await pages.registerPage.enterUsername("Tester");
});

Given("I enter email", async function () {
  await pages.registerPage.enterEmail("test@mailinator.com");
});

Given("I confirm email", async function () {
  await pages.registerPage.enterConfirmEmail("test@mailinator.com");
});

Given("I enter password", async function () {
  await pages.registerPage.enterPassword("Test123!");
});

Given("I confirm password", async function () {
  await pages.registerPage.enterConfirmPassword("Test123!");
});

Given("I check terms checkbox", async function () {
  await pages.registerPage.clickTermsCheckbox();
});

Given("I check newsletter checkbox", async function () {
  await pages.registerPage.clickNewsletterCheckbox();
});

When("I click Create an Account button", async function () {
  await pages.registerPage.clickCreateAccountButton();
});

Then("Please enter Username. error is visible", async function () {
  await pages.registerPage.checkUsernameFieldError('Please enter Username.');
});

Then("Please enter a valid email address. error is visible", async function () {
  await pages.registerPage.checkEmailEmptyFieldError('Please enter a valid email address.');});

Then("Please re-enter your email address. error is visible", async function () {
  await pages.registerPage.checkConfirmEmailFieldError('Please re-enter your email address.');
});

Then("Please enter Password. error is visible", async function () {
  await pages.registerPage.checkPasswordEmptyFieldError('Please enter Password.');
});

Then("Your password must be at least 8 characters long. error is visible", async function () {
  await pages.registerPage.checkConfirmPasswordFieldError('Your password must be at least 8 characters long.');
});

Then("Please accept our Terms and Conditions. error is visible", async function () {
  await pages.registerPage.checkTermsAndConditionsError('Please accept our Terms and Conditions.');
});

Then("Email address does not match. error is visible", async function () {
  await pages.registerPage.checkEmailMismatchError('Email address does not match.');
});

Then("Password does not match, please check again. error is visible", async function () {
  await pages.registerPage.checkConfirmPasswordFieldError('Password does not match, please check again.');
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


