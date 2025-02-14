import { BasePage } from "./base_page";

export class RegisterPage extends BasePage {
//Selectors
  username_Field = "#ContentPlaceHolder1_txtUserName";
  usernameError_Text = '#ContentPlaceHolder1_txtUserName-error';
  email_Field = "#ContentPlaceHolder1_txtEmail";
  emailError_Text = '#ContentPlaceHolder1_txtEmail-error';
  confirmEmail_Field = "#ContentPlaceHolder1_txtConfirmEmail";
  confirmEmailError_Text = '#ContentPlaceHolder1_txtConfirmEmail-error';
  password_Field = "#ContentPlaceHolder1_txtPassword";
  passwordError_Text = '#ContentPlaceHolder1_txtPassword-error';
  password8CharactersError_Text = '#ContentPlaceHolder1_txtPassword2-error'
  confirmPassword_Field = "#ContentPlaceHolder1_txtPassword2";
  termsAndConditions_Checkbox = "#ContentPlaceHolder1_MyCheckBox";
  termsAndConditionsError_Text = '//div[text()="Please accept our Terms and Conditions."]';
  newsletter_Checkbox = "#ContentPlaceHolder1_SubscribeNewsletter";
  CreateAnAccount_Button = "#ContentPlaceHolder1_btnRegister";

//Actions
async enterUsername(text: string) {
    await this.enterText(this.username_Field, text)
}
async enterEmail(text: string) {
  await this.enterText(this.email_Field, text)
}
async enterConfirmEmail(text: string) {
  await this.enterText(this.confirmEmail_Field, text)
}
async enterPassword(text: string) {
  await this.enterText(this.password_Field, text)
}
async enterConfirmPassword(text: string) {
  await this.enterText(this.confirmPassword_Field, text)
}
async clickTermsCheckbox() {
  await this.click(this.termsAndConditions_Checkbox)
}
async clickNewsletterCheckbox() {
  await this.click(this.newsletter_Checkbox)
}
async clickCreateAccountButton() {
  await this.click(this.CreateAnAccount_Button)
}
async clickOnField() {
  await this.click(this.email_Field)
}
async clearUsernameInputField() {
  await this.clear(this.username_Field)
}

//Assertions
  async checkUsernameFieldError(errorText: string) {
    await this.compareText(this.usernameError_Text, errorText);
  }
  async checkIfUsernameFieldHave30Chars(errorText: string) {
    await this.compareValue(this.username_Field, errorText);
  }
  async checkEmailEmptyFieldError(errorText: string) {
    await this.compareText(this.emailError_Text, errorText);
  }
  async checkConfirmEmailFieldError(errorText: string) {
    await this.compareText(this.confirmEmailError_Text, errorText);
  }
  async checkEmailMismatchError(errorText: string) {
    await this.compareText(this.confirmEmailError_Text, errorText);
  }
  async checkPasswordEmptyFieldError(errorText: string) {
    await this.compareText(this.passwordError_Text, errorText);
  }
  async checkConfirmPasswordFieldError(errorText: string) {
    await this.compareText(this.password8CharactersError_Text, errorText);
  }
  async checkTermsAndConditionsError(errorText: string) {
    await this.compareText(this.termsAndConditionsError_Text, errorText);
  }
}
