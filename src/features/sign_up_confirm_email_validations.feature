Feature: Sign up confirm email field validations

	As a guest on Etherscan sign up page
	I want to be able to see all email errors that can occur on registration form
	So I know that platform won't let me create profil with invalid data

    Scenario: Guest cannot register with an empty confirm email field
        Given I leave confirm email field empty
        When I click the "Create an Account" button
        Then I should see error message "Please re-enter your email address."

    Scenario: Check error message when confirm email field is filled but email field is empty
        Given I leave email field empty
        And I enter valid email in confirm email field
        When I click the "Create an Account" button
        Then I should see error message "Email address does not match."

    Scenario: Check error message when confirm email is not matching email
        Given I enter email in confirm email field that is not matching email
        Then I should see error message "Email address does not match."

    Scenario: Check error message when inserting invalid email in confirm email field that is matching email 
        Given I enter invalid email in confirm email field that is matching email
        Then I should see error message "Please re-enter your email address."

    Scenario: Check error message when inserting email in confirm email field that is matching email and then erase it
        Given I enter email in confirm email field that is matching email
        When I cleare confirm email input
        Then I should see error message "Please re-enter your email address."