Feature: CoinMarketCap

  Scenario: Check page title
    Given I am on the page 'https://coinmarketcap.com'
    Then the page title should be "Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap"

  Scenario: Capture page content
    When I select 20 rows
    Then I print the table

  Scenario: Filter the page based on PoW algorithm,Coins, price and Mineable
    When I filter by algorithm and select 'PoW'
    And I add extra filter
    And I toggle Mineable
    And I select All Cryptocurrencies and then select Coins
    And I select price and set minimum value to 100 and maximum to 10000
    Then I print the filtered table  

  Scenario: Compare filtered and unfiltered data
    When I match the filtered data with unfiltered data
    Then I print the results