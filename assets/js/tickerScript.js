// potentional ticker solution
// realtime api
// api key =U2BVTTCYEI0FHFAD

// html selector
var tickerDiv = document.querySelector('#tickers');

// ticker dom function
var tickerGenerator  = function(){

// Currency array
var array = ["BTC", "ETH", "XRP", "USDT"];
    console.log(array);
    for (var i = 0; i<array.length; i++){
        task(i)
    }
    function task(i){

        // set url
         var realTimeApiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${array[i]}&to_currency=USD&apikey=U2BVTTCYEI0FHFAD`


        // fetch api
        fetch(realTimeApiUrl)
        .then(function(response) {
            // response was successful
            response.json().then(function(exchange) {
                // verify data is correct in console
                
                if(exchange) {
                    displayExchange(exchange);
                }
                console.log(exchange)
                
            });
            // catch lost of internet
        })
        .catch(function(error) {
            console.error();
            console.log("Unable to connect to server at this time.");
        });
    }
}

// Creating HTML object to display

var displayExchange = function(exchange) {

    console.log(exchange)

    // clear precious search
    var formSearch = document.getElementById("coinPrice");
    if(formSearch){
        formSearch.parentNode.removeChild(formSearch);
    }

    // setting values from API call to variables
    var currencyName = exchange["Realtime Currency Exchange Rate"]["2. From_Currency Name"];
    var currencyCode = exchange["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
    var currencyPrice = (Math.round( (exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*10000)/10000)
    .toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    // creating dom to display on index HTML
    var cryptoExchange = document.createElement("h4");
    cryptoExchange.setAttribute(
        "class",
        "cell medium-2 text-center"
    );

    // setting attribues to h4 container
    cryptoExchange.setAttribute("id", "coinPrice");
    cryptoExchange.textContent = currencyName;
    // creating span to house currency name
    var cryptoSpan = document.createElement("span");
    cryptoSpan.setAttribute("class", "text-center");
    cryptoSpan.setAttribute("id", currencyCode);
    // creating h5 to hold currency price
    var cryptoH5 = document.createElement("h5");
    cryptoH5.textContent = "$" + currencyPrice;
    // creating link to navigate to crypto page
    var cryptoLink = createElement("a")
    cryptoLink.setAttribute(string.link("https://coinmarketcap.com/currencies/${currencyName}/")) 
    // appending span to main container
    cryptoExchange.appendChild(cryptoSpan);
    // appending link to main container
    cryptoExchange.appendChild(cryptoLink);
    // appending currency price container
    cryptoSpan.appendChild(cryptoH5);    
    // appending all elements onto page html. 
    tickerDiv.appendChild(cryptoExchange);
    
}


// initial call and refresshing the code block
tickerGenerator()

// Refresh 
var refresh = function() {
    tickerGenerator();
} 
var timer = setInterval(refresh, 61000)
