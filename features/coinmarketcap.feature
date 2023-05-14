Feature: CoinMarketCap

  Scenario: Check page title
    Given I am on the CoinMarketCap homepage
    Then the page title should be "Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap"

  Scenario: Display page contents in groups of 20 rows
    Given I am on the CoinMarketCap homepage
    When I capture all the page contents
    Then the contents should be displayed in groups of 20 rows

  Scenario: Apply filters to show mineable PoW coins with price between $100 and $10,000
    Given I am on the CoinMarketCap homepage
    When I click on the "Filter" button
    And I select "PoW" from the "Algorithm" dropdown
    And I click on the "+ Add Filter" button
    And I toggle "Mineable" in the filter menu
    And I select "All Cryptocurrencies"
    And I select "Coins" from the "Type" dropdown
    And I set the minimum price to $100 and the maximum price to $10,000
    And I click on the "Apply" button
    Then the page contents should be displayed