# CryptoCalc

## Description of the Website
This is a website designed to give a client the ability to see how the value of their cryptocurrency has changed overtime. The website is designed to be clean in style and simple to use. After completing a calculation and obtaining the results, the user has the ability to review the newest calculation with their previous ones. A ticker along the top is constantly updating with the most current prices for some of the most popular cryptocurrencies.

<br/>

## How it Works
* The user first selects whether they want to calculate the change in value of their crypto using the dollar value or the number of coins they have in that cryptocurrency.
* Next the use enters in either the dollar amount or crypto amount based on their previous selection.
* They will then select from a dropdown of the most popular cryptocurrencies.
* The user will enter in a start and end date to compare how the value has changed over that period of time.
* Lastly the user hits the "Calculate" button, and will be provided with a full set of calculated output showing the changes in value.
* If the user would like, they can go back and change the input values, click "Clear Form" to start fresh, or click on "Previous Results" to pull up a table showing their previous outputs.

<br/>

## Website Features
* Mobile Responsiveness
    * Each screen size has been tested to verify that the app is friendy and easy to use with all devices.
* Utilization of two server-side API calls - one call to continuously update the ticker, and another call to pull crypto data as far back as 2 years ago.
* Ability to switch between two forms to calculate in USB or amount of cryptocurrency.
* Local Storage to save search history and display the results in a table for easy comparison.
    * The table will show the last 15 search outputs.
    * The user has the option to clear the objects from local storage as well.
* Error handling to make sure that all data entered is valid.
    * Checks include making sure only positive numbers are entered into the amount fields.
    * Making sure no fields are left blank.
    * Not allowing the user to select an invalid date, or a start date that is after the end date.
    * All errors are handled by modals.
  
<br/>

## Link to CryptoCalc Website
https://chriswein12.github.io/crypto-calc/

<br/>

## How the Website Looks on a Computer Display

![.gif of full-screen website](./assets/gifs/full-screen-cryptocalc.gif)

<br/>

## How the Website Looks on a Mobile Display

![.gif of full-screen website](./assets/gifs/mobile-screen-cryptocalc.gif)

<br/>

## Website Limitations
* We are currently limited by the API calls only allowing us to obtain data from two years ago for free, as well as only allowing a limited amount of fetch requests per minute and per day.

<br/>

## Credits

*Project completed by Chris Wein and John Anderson*