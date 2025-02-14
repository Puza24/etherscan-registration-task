import { Given, Then } from "@cucumber/cucumber";
import { pages } from "../utils/instances";

// todo improvements

Given("I enter {string} characters", async function (input: string) {
  if (input == '4') {
    await pages.registerPage.enterUsername('asdf')
  } else if (input == '35') {
    await pages.registerPage.enterUsername('qwertyuiopasdfghjklzxcvbnm123456789')
  }
  // click on another field to trigger the error
  await pages.registerPage.clickOnField();
});

Given("I enter any special characters returns error", async function () {
  const specialCharacters = [
    ' ','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>',
    '/', '?', '~', '`'
  ];
  
  // checking error for all special characters and space input
  for (let i=0; i<specialCharacters.length; i++) {
    await pages.registerPage.enterUsername(`asdf${specialCharacters[i]}`)
    // click on another field to trigger the error
    await pages.registerPage.clickOnField();
    // assert error
    await pages.registerPage.checkUsernameFieldError('Only alphanumeric characters allowed.')
    // clear field input
    await pages.registerPage.clearUsernameInputField();
  }
});

Then("Please enter at least 5 characters. error is visible", async function () {
  await pages.registerPage.checkUsernameFieldError('Please enter at least 5 characters.')
});

Then("I see only first 30 characters in the username field", async function () {
  await pages.registerPage.checkIfUsernameFieldHave30Chars('qwertyuiopasdfghjklzxcvbnm1234')
});