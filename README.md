# Travel Assistant


### Developer: Shen Francisco Nunguiane
### Date: June 18, 2024

---

## Description

Travel Assistant is a web application that allows users to search for detailed information about destination cities, including population, GDP per capita, weather forecasts, and exchange rates.  
The application offers multilingual support to serve a global audience.

## Features

- **Destination Search**: Allows users to search for detailed information about a specific city.  
- **Detailed Information**:  
  - **Population and GDP**: Population data and the city's GDP per capita.  
  - **Weather Forecast**: Up-to-date weather information.  
  - **Exchange Rates**: Information about currency exchange rates.  
- **User Authentication**: User registration and login.  
- **Multilingual Support**: Support for Portuguese, English, and French, with English as the default language.  
- **Interactive Elements**: Interactive maps to visualize the city's location.  
- **Historical Data**: Comparison of historical population and GDP data for the last 10 years.

## APIs Used

- **OpenWeatherMap**: Provides weather forecasts for the searched city.  
- **ExchangeRatesAPI**: Provides updated currency exchange rates.  
- **World Bank API**: Provides population and GDP per capita data for the searched city.

## Requirements to Run the Project

1. **Redis Server**: Must be installed and running.  
2. **MongoDB**: Must be installed and running.  
3. **SSL Certificates**: Apply the certificate in the "server.crt" file as trusted on your machine or browser, or generate your own certificate and update it in the project.
