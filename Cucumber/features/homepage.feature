Feature: Homepage 
  As a user
  I want to visit oDesk
  So I can see first page with all buttons, inputs, links

  Scenario: Checking buttons are presented
    Given I am on the homepage
    Then I should see a "signup" button
    And I should see a "login" button