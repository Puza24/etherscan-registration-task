@regression 
Feature: Sign up username field validations

  As a guest on Etherscan sign up page
	I want to be able to see all username errors that can occur on sign up form
	So I know that platform won't let me create profil with invalid data

  Username has to be from 5 to 30 characters, only alphanumeric

  Scenario: Check error for entering characters number below limit will
    Given I enter "4" characters
    Then Please enter at least 5 characters. error is visible

  Scenario: User is unable to enter more than 30 characters
    Given I enter "35" characters
    Then I see only first 30 characters in the username field

  Scenario: Check error for using special characters
    Given I enter any special characters returns error

  Scenario: Leaving username empty returns error
    Given I enter "validUsername" characters 
    When I clear input
    Then I see an error