Feature: Sign up email field validations

	As a guest on Etherscan sign up page
	I want to be able to see all email errors that can occur on sign up form
	So I know that platform won't let me create profil with invalid data

    Scenario: Guest cannot register with an empty email field
        Given I leave email field empty
        When I click the "Create an Account" button
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message when deleting email from email field
        Given I enter valid email
        When I delete email
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message when there are two @ symbols in email
        Given I enter email with more than one @ symbol
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is no @ symbol email
        Given I enter email without @ syombol
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is spaces in email
        Given I enter email with space inside
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is no domain after @ symbol in email
        Given I enter "user@" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is no characters before @ symbol in email
        Given I enter "@mail.com" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is hyphen at start of domain in email
        Given I enter "user@-mail.com" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is dot at end of domain in email
        Given I enter "user@mail.com." in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is dot at start of domain in email
        Given I enter "user@.mail.com" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is dot at start of subdomain in email
        Given I enter "user@.mail.mail.com" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is dot at end of email with domain and subdomain
        Given I enter "user@mail.mail.com." in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is domain with two dots next to each other in email
        Given I enter "user@mail..com" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is domain with dot and hyphen next to each other
        Given I enter "user@mail-.com" in email field
        Then I should see error message "Please enter a valid email address."

    Scenario: Check error message if there is special characters in domain
        Given I enter special characters in email domain   # This applies to all special characters except dot and hyphen
        Then I should see error message "Please enter a valid email address."