Feature: Sign up confirm email field validations

	As a guest on Etherscan sign up page
	I want to be able to see all email errors that can occur on registration form
	So I know that platform won't let me create profil with invalid data

    Scenario: Check error message when confirm email is not matching email
        Given I enter email in confirm email field that is not matching email
        Then I should see error message "Email address does not match."

    Scenario: Check error message when inserting invalid email in confirm email field that is matching email 
        Given I enter invalid email in confirm email field that is matching email
        Then I should see error message "Please re-enter your email address."

    Scenario: Check error message when inserting email in confirm email field that is matching email and then erase it
        Given I enter email in confirm email field that is matching email
        When I clear confirm email input
        Then I should see error message "Please re-enter your email address."