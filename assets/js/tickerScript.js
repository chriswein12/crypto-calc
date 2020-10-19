// potentional ticker solution
// realtime api
// api key =U2BVTTCYEI0FHFAD
var cryptoExchangeElBtc = document.querySelector("#btc");
var cryptoExchangeElEth = document.querySelector("#eth");
var cryptoExchangeElXrp = document.querySelector("#xrp");

var tickerBtc = function(){
var array = "btc";
console.log(array);
 var realTimeApiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${array}&to_currency=USD&apikey=U2BVTTCYEI0FHFAD`
fetch(realTimeApiUrl)
.then(function(response) {
    // request was successful          
    response.json().then(function(exchange){ 
        // verifing dat is correct in console  
        displayExchangeBtc(exchange)
        console.log(exchange);                
 });  
 // catch for lost of internet  
}).catch(function(error) {
    alert("Unable to connect to server at this time.")
})
}

var displayExchangeBtc = function(exchange) {
    // clearing previous search
    var formSearch = document.getElementById("coinPriceBtc")
        if (formSearch)
        formSearch.parentNode.removeChild(formSearch);

    // creating dom to display on index html
    var cryptoExchangeBtc = document.createElement("h3")
    cryptoExchangeBtc.id = "coinPriceBtc"
    cryptoExchangeBtc.textContent = "$ " + exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    
    // attaching crypto close on html container
    cryptoExchangeElBtc.appendChild(cryptoExchangeBtc);

    // verifing closing price recieved in console 
    console.log(cryptoExchangeBtc);
}

// ethereum ticker
var tickerEth = function(){
     var realTimeApiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=U2BVTTCYEI0FHFAD`
    fetch(realTimeApiUrl)
    .then(function(response) {
        // request was successful          
        response.json().then(function(exchange){ 
            // verifing dat is correct in console  
            displayExchangeEth(exchange)
            console.log(exchange);                
     });  
     // catch for lost of internet  
    }).catch(function(error) {
        alert("Unable to connect to server at this time.")
    })
    }
    
    var displayExchangeEth = function(exchange) {
        // clearing previous search
        var formSearch = document.getElementById("coinPriceEth")
            if (formSearch)
            formSearch.parentNode.removeChild(formSearch);
    
        // creating dom to display on index html
        var cryptoExchangeEth = document.createElement("h3")
        cryptoExchangeEth.id = "coinPriceEth"
        cryptoExchangeEth.textContent = "$ " + exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        
        // attaching crypto close on html container
        cryptoExchangeElEth.appendChild(cryptoExchangeEth);
    
        // verifing closing price recieved in console 
        console.log(cryptoExchangeEth);
    }


    // Xrp ticker
var tickerXrp = function(){
    var realTimeApiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=XRP&to_currency=USD&apikey=U2BVTTCYEI0FHFAD`
   fetch(realTimeApiUrl)
   .then(function(response) {
       // request was successful          
       response.json().then(function(exchange){ 
           // verifing dat is correct in console  
           displayExchangeXrp(exchange)
           console.log(exchange);                
    });  
    // catch for lost of internet  
   }).catch(function(error) {
       alert("Unable to connect to server at this time.")
   })
   }
   
   var displayExchangeXrp = function(exchange) {
       // clearing previous search
       var formSearch = document.getElementById("coinPriceXrp")
           if (formSearch)
           formSearch.parentNode.removeChild(formSearch);
   
       // creating dom to display on index html
       var cryptoExchangeXrp = document.createElement("h3")
       cryptoExchangeXrp.id = "coinPriceXrp"
       cryptoExchangeXrp.textContent = "$ " + exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
       
       // attaching crypto close on html container
       cryptoExchangeElXrp.appendChild(cryptoExchangeXrp);
   
       // verifing closing price recieved in console 
       console.log(cryptoExchangeXrp);
   }

// Intial call
tickerBtc();
tickerEth();
tickerXrp();

// refresh
var refresh = function () {
    tickerBtc();
    setTimeout(tickerEth, 10000);
    setTimeout(tickerXrp, 20000);    
};
var timer = setInterval(refresh, 30000);


