Feature: Sign up password and confirm password field validations

	As a guest on Etherscan sign up page
	I want to be able to see all password and confirm passerod field errors that can occur on sign up form
	So I know that platform won't let me create profil with invalid data

# Password field validations
    Scenario: Check password field error when guest insert valid password and then clear input 
        Given I enter valid password in password field 
        When I clear password input field
        Then I should see error message "Please enter Password."

    Scenario: Check error for entering password with less than 8 characters
        Given I enter password with less than 8 characters in password field 
        Then I should see error message "Your password must be at least 8 characters long."

# Confirm password field validations
    Scenario: Check confirm password field error when guest insert matching password and then clear input 
        Given I enter matching password in confirm password field 
        When I clear password input field
        Then I should see error message "Your password must be at least 8 characters long."

    Scenario: Check confirm password field error when guest insert mismatching password
        Given I enter mismatching password in confirm password field 
        Then I should see error message "Password does not match, please check again."

    Scenario: Check confirm password field error when guest insert invalid matching password
        Given I enter matching invalid password in confirm password field # Matching invalid password here would be password with less than 8 characters
        Then I should see error message "Your password must be at least 8 characters long."

# Password visibility option
    Scenario: Guest cannot see password while typing in password field by default
        Given I enter password in password field or in confirm password field
        Then I should see dots and not see characters that I am typing 

    Scenario: Guest click on eye icon in passwrod field to reveal password in both password and confirm password fields
        Given I enter password in password field and in confirm password field
        When I click on eye icon on the right in passwrod field
        Then I should see that my password is revealed in both password and confirm password fields

    Scenario: Guest click on eye icon in confirm passwrod field to reveal passwords in both password and confirm password fields
        Given I enter password in password field and in confirm password field
        When I click on eye icon on the right in confirm passwrod field
        Then I should see that my password is revealed in both password and confirm password fields