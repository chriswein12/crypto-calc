// potentional ticker solution
// realtime api
// api key =U2BVTTCYEI0FHFAD
var cryptoExchangeElBtc = document.querySelector("#btc");
var cryptoExchangeElEth = document.querySelector("#eth");
var cryptoExchangeElXrp = document.querySelector("#xrp");
var cryptoExchangeElUsdt = document.querySelector("#usdt");
var cryptoExchangeElLtc = document.querySelector("#ltc");


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
    console.log("Unable to connect to server at this time.")
})
}

// Creating html object to display
var displayExchangeBtc = function(exchange) {
    // clearing previous search
    var formSearch = document.getElementById("coinPriceBtc")
        if (formSearch)
        formSearch.parentNode.removeChild(formSearch);

    // creating dom to display on index html
    var cryptoExchangeBtc = document.createElement("h5")
    cryptoExchangeBtc.id = "coinPriceBtc"
    cryptoExchangeBtc.textContent = "$ " + Math.round( (exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*10000)/10000;
    
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
        console.log("Unable to connect to server at this time.")
    })
    }
    
    // Creating html object to display
    var displayExchangeEth = function(exchange) {
        // clearing previous search
        var formSearch = document.getElementById("coinPriceEth")
            if (formSearch)
            formSearch.parentNode.removeChild(formSearch);
    
        // creating dom to display on index html
        var cryptoExchangeEth = document.createElement("h5")
        cryptoExchangeEth.id = "coinPriceEth"
        cryptoExchangeEth.textContent = "$ " + Math.round( (exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*10000)/10000;
        
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
       console.log("Unable to connect to server at this time.")
   })
   }
   
      // Creating html object to display
   var displayExchangeXrp = function(exchange) {
       // clearing previous search
       var formSearch = document.getElementById("coinPriceXrp")
           if (formSearch)
           formSearch.parentNode.removeChild(formSearch);
   
       // creating dom to display on index html
       var cryptoExchangeXrp = document.createElement("h5")
       cryptoExchangeXrp.id = "coinPriceXrp"
       cryptoExchangeXrp.textContent = "$ " + Math.round( (exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*10000)/10000;
       
       // attaching crypto close on html container
       cryptoExchangeElXrp.appendChild(cryptoExchangeXrp);
   
       // verifing closing price recieved in console 
       console.log(cryptoExchangeXrp);
   }

       // Teather ticker
var tickerUsdt = function(){
    var realTimeApiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USDT&to_currency=USD&apikey=U2BVTTCYEI0FHFAD`
   fetch(realTimeApiUrl)
   .then(function(response) {
       // request was successful          
       response.json().then(function(exchange){ 
           // verifing dat is correct in console  
           displayExchangeUsdt(exchange)
           console.log(exchange);                
    });  
    // catch for lost of internet  
   }).catch(function(error) {
       console.log("Unable to connect to server at this time.")
   })
   }

   // Creating html object to display
   var displayExchangeUsdt = function(exchange) {
       // clearing previous search
       var formSearch = document.getElementById("coinPriceUsdt")
           if (formSearch)
           formSearch.parentNode.removeChild(formSearch);
   
       // creating dom to display on index html
       var cryptoExchangeUsdt = document.createElement("h5")
       cryptoExchangeUsdt.id = "coinPriceUsdt"
       cryptoExchangeUsdt.textContent = "$ " + Math.round( (exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*10000)/10000;
       
       // attaching crypto close on html container
       cryptoExchangeElUsdt.appendChild(cryptoExchangeUsdt);
   
       // verifing closing price recieved in console 
       console.log(cryptoExchangeUsdt);
   }

   // Litecoin ticker
   var tickerLtc = function(){
    var realTimeApiUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=LTC&to_currency=USD&apikey=U2BVTTCYEI0FHFAD`
   fetch(realTimeApiUrl)
   .then(function(response) {
       // request was successful          
       response.okk.json().then(function(exchange){ 
           // verifing dat is correct in console  
           displayExchangeLtc(exchange)
           console.log(exchange);                
    });  
    // catch for lost of internet  
   }).catch(function(error) {
       console.log("Unable to connect to server at this time.")
   })
   }
   
   // Creating html object to display
   var displayExchangeLtc = function(exchange) {
       // clearing previous search
       var formSearch = document.getElementById("coinPriceLtc")
           if (formSearch)
           formSearch.parentNode.removeChild(formSearch);
   
       // creating dom to display on index html
       var cryptoExchangeLtc = document.createElement("h5")
       cryptoExchangeLtc.id = "coinPriceLtc"
       cryptoExchangeLtc.textContent = "$ " + Math.round( (exchange["Realtime Currency Exchange Rate"]["5. Exchange Rate"])*10000)/10000;
       
       // attaching crypto close on html container
       cryptoExchangeElLtc.appendChild(cryptoExchangeLtc);
   
       // verifing closing price recieved in console 
       console.log(cryptoExchangeLtc);
   }

// Intial call
tickerBtc();
tickerEth();
tickerXrp();
tickerUsdt();
tickerLtc();

// refresh
var refresh = function () {
    tickerBtc();
    setTimeout(tickerEth, 12000);
    setTimeout(tickerXrp, 24000);  
    setTimeout(tickerUsdt, 36000); 
    setTimeout(tickerLtc, 48000);   
};
var timer = setInterval(refresh, 61000);


