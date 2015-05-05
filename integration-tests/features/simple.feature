Feature: Simple Feature

  Background:
    Given I visit LOCALHOST

  Scenario: Entering Information
    When I enter "dogecoins"
    Then I should see "dogecoins"
