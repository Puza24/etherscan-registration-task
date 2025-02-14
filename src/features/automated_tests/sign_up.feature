@regression
Feature: Sign up

  As a guest on Etherscan sign up page
  I should be able to sign up
  So I get access to all features on the app

  Scenario: Register as a guest
    Given I enter username
    And I enter email
    And I confirm email
    And I enter password
    And I confirm password
    And I check terms checkbox
    And I check newsletter checkbox
  # todo: because of CAPTCHA on PROD env, steps below are not defined, steps are only being logged
    When I click Create an Account button
    Then Verify Your Email text is visible
    And I navigate to mailinator
    And I click on confirmation link from inbox
    And Welcome to Etherscan! text is visible
    And I click on sign in button
    And I enter username
    And I enter password
    And I click Login button
    And I should be on account overview page

  Scenario: Unable to sign up without entering mandatory data
    Given I click Create an Account button
    Then Please enter Username. error is visible
    And Please enter a valid email address. error is visible
    And Please re-enter your email address. error is visible
    And Please enter Password. error is visible
    And Your password must be at least 8 characters long. error is visible
    And Please accept our Terms and Conditions. error is visible

  Scenario: Unable to sign up without username input
    Given I enter email 
    And I confirm email
    And I enter password
    And I confirm password
    And I check terms checkbox
    When I click Create an Account button
    Then Please enter Username. error is visible

  Scenario: Unable to sign up without email input
    Given I enter username 
    And I confirm email 
    And I enter password
    And I confirm password
    And I check terms checkbox
    When I click Create an Account button
    Then Please enter a valid email address. error is visible
    And Email address does not match. error is visible

  Scenario: Unable to sign up without confirm email input
    Given I enter username
    And I enter email
    And I enter password
    And I confirm password
    And I check terms checkbox
    When I click Create an Account button
    Then Please re-enter your email address. error is visible

  Scenario: Unable to sign up without password input 
    Given I enter username 
    And I enter email
    And I confirm email
    And I confirm password
    And I check terms checkbox
    When I click Create an Account button
    Then Please enter Password. error is visible
    And Password does not match, please check again. error is visible

  Scenario: Unable to sign up without confirm password input
    Given I enter username 
    And I enter email
    And I confirm email
    And I enter password
    And I check terms checkbox
    When I click Create an Account button
    Then Your password must be at least 8 characters long. error is visible

   Scenario: Unable to sign up without checking terms and conditions checkbox
    Given I enter username 
    And I enter email
    And I confirm email
    And I enter password
    And I confirm password
    When I click Create an Account button
    Then Please accept our Terms and Conditions. error is visible