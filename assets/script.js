// var elements to id html containers
var cryptoFormEl = document.querySelector("#crypto-form");
var nameInputEl = document.querySelector("#crypto")
 
// var containers to hold imput html data
var cryptoContainerEl = document.querySelector("#crypto-container")
var cryptoSearchTerm = document.querySelector("#crypto-search-term")

//Crypto coin button selector. 
var coinButtonEl = document.querySelector("#coin-buttons");


// var container to populate with crypto search data and fetch api
// api key = P4A34BK1ZIK2J6PV
var getCryptoData = function(crypto){

    var apiUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${crypto}&market=USD&apikey=P4A34BK1ZIK2J6PV`
    
    fetch(apiUrl)
    .then(function(response) {
         // request was successful
         if (response.ok){       
            response.json().then(function(data){ 
                displayStats(data, crypto);           
                console.log(data);
            });
            //error handler
        } else {
            alert("Error: " + response.statusText);
        }
        
    }); 

}

// passing response data to html
var displayStats = function(data, crypto) {
   // displaying in html crypto name that was search 
    var cryptoName = crypto;
cryptoSearchTerm.textContent = cryptoName + " = ";

// using moment to add current date. 
var currentDate = moment().format("YYYY-MM-DD");
console.log(currentDate);

 var cryptoClose = document.createElement("h2")
 cryptoClose.id = "coinPrice"
 cryptoClose.textContent = "$ " + data["Time Series (Digital Currency Daily)"][currentDate]["4a. close (USD)"];

// dispalying crypto close on html
cryptoContainerEl.appendChild(cryptoClose);

console.log(cryptoClose);
}

//prevented refresh of browser
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    
   // removing searched crypto token from button element.  
    var formSearch = document.getElementById("coinPrice")
    if (formSearch)
    formSearch.parentNode.removeChild(formSearch);

// Var holding crypto name that was given
var cryptoName = nameInputEl.value.trim();
console.log(cryptoName);

if(cryptoName) {
    getCryptoData(cryptoName);
    nameInputEl.value = "";
// handling invalid crypto names
}else {
    alert("Please enter Crypto Name")
}
}
//var for coin button selector
var buttonClickHandler = function(event) {
    var coin = event.target.getAttribute("data-coin");
    if (coin) {
        getCryptoData(coin);

        //clear old content
        cryptoContainerEl.textContent = "";
    }
}


// event listener for crypto coin button
coinButtonEl.addEventListener("click", buttonClickHandler);

// event listener to call formSubmitHandler to start the process. 

cryptoFormEl.addEventListener("submit", formSubmitHandler);

