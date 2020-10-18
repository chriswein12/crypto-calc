// var container to hold crypto data return
var cryptoContainerEl = document.querySelector("#output");
var dollarAmountEl = document.querySelector("#dollar-amount");
var cryptoSelected = document.getElementById("crypto-select").value;

// var container to populate with crypto search data and fetch api
var getCryptoData = function(crypto){

// creating url to call
var apiUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${crypto}&market=USD&apikey=P4A34BK1ZIK2J6PV`
    
// fetching created url
fetch(apiUrl)
.then(function(response) {
    // request was successful
    if (response.ok){       
            response.json().then(function(data){ 
                displayStats(data);
                // verifing dat is correct in console           
                console.log(data);                
            });
            //error handler
        } else {
            alert("Error: " + response.statusText);
        }        
    }); 
}

$("#dollar-calc").on("click", "#calculate-button", function(event) {
    debugger;
    var dollarAmount = $("#dollar-amount").value;
    console.log(dollarAmount);
})

// passing response data to html
var displayStats = function(data) {
    // clearing previous search
    var formSearch = document.getElementById("coinPrice")
        if (formSearch)
        formSearch.parentNode.removeChild(formSearch);

    // using moment to add current date. 
    var currentDate = moment().format("YYYY-MM-DD");
    // verifing currentDate in console
    console.log(currentDate);

    // creating dom to display on index html
    var cryptoClose = document.createElement("h2")
    cryptoClose.id = "coinPrice"
    cryptoClose.textContent = "$ " + data["Time Series (Digital Currency Daily)"][currentDate]["4a. close (USD)"];
    
    // attaching crypto close on html container
    cryptoContainerEl.appendChild(cryptoClose);

    // verifing closing price recieved in console 
    console.log(cryptoClose);
}

// function called from html when selector is released. Indicates an "onchange."
function copy() {
    console.log(cryptoSelected);   
    getCryptoData(cryptoSelected);
}