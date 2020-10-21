// var container to hold crypto data return
var outputContainerEl = document.querySelector("#output-box");
var outputSummaryContainerEl = document.querySelector("#output-summary");





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
                    calculateStats(data);
                    // verifing dat is correct in console           
                    console.log(data);                
                });
                //error handler
            } else {
                alert("Error: " + response.statusText);
            }        
    }); 
}

$("#dollar-calc #calculate-button").click(function(event) {
    event.preventDefault();
    var dollarAmount = document.getElementById("dollar-amount").value;
    var cryptoSelected = document.getElementById("crypto-select").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;


    if(dollarAmount === "" || Math.sign(dollarAmount) === -1) {
        alert("Invalid");
    } else if (cryptoSelected === "") {
        alert("Select a cryptocurrency");
    } else if (startDate === "" || endDate === "") {
        alert ("Please enter both a start and end date");
    } else {
    getCryptoData(cryptoSelected);
    };
});

// passing response data to html
var calculateStats = function(cryptoData) {
    
    var dollarAmount = document.getElementById("dollar-amount").value;
    var cryptoAmount = document.getElementById("crypto-amount").value;
    var startDate = document.getElementById("start-date").value;
    var endDate = document.getElementById("end-date").value;
    // clearing previous search
    // var formSearch = document.getElementById("coinPrice")
    //     if (formSearch)
    //     formSearch.parentNode.removeChild(formSearch);

    var startPrice = cryptoData["Time Series (Digital Currency Daily)"][startDate]["4a. close (USD)"];
    var endPrice = cryptoData["Time Series (Digital Currency Daily)"][endDate]["4a. close (USD)"];

    if (cryptoAmount === "") {
        var calculatedCryptoAmount = dollarAmount / startPrice;
        var startValue = dollarAmount;
    }
    else {
        var calculatedCryptoAmount = cryptoAmount;
        var startValue = cryptoAmount * startPrice;
    }

    var endValue = calculatedCryptoAmount * endPrice;


    var percentChange = ((endPrice - startPrice)/startPrice)*100;
    var gainLoss = endValue - startValue;

    if (Math.sign(gainLoss) === -1) {
        var sign = "decreased";
    }
    else {
        var sign = "increased";
    }
    

    var [sYear, sMonth, sDay] = startDate.split("-");
    var [eYear, eMonth, eDay] = endDate.split("-");

    var outputs = {
        cryptoType: document.getElementById("crypto-select").value.toUpperCase(),
        sDate: sMonth + "/" + sDay + "/" + sYear,
        eDate: eMonth + "/" + eDay + "/" + eYear,
        sPrice: "$" + (Math.round(startPrice * 100)/100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        ePrice: "$" + (Math.round(endPrice * 100)/100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        sValue: "$" + (Math.round(startValue * 100)/100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        eValue: "$" + (Math.round(endValue * 100)/100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        cryptoAmount: (Math.round(calculatedCryptoAmount * 100)/100).toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        percentChange: (Math.round(Math.abs(percentChange) * 100)/100).toFixed(2)*Math.sign(percentChange) + "%",
        valueChange: "$" + ((Math.round(Math.abs(gainLoss) * 100)/100).toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
        sign: sign
    };

    displayOutput(outputs);
}

var displayOutput = function(outputs) {
    console.log(outputs);

    outputContainerEl.removeAttribute("class");

    var outputSummaryEl = document.createElement("h4");
    outputSummaryEl.textContent = "Your " + outputs.cryptoType + " " + outputs.sign + " in value by " + outputs.valueChange;
    var outputSubSummaryEl = document.createElement("h5");
    outputSummaryEl.classList = "text-center";
    outputSubSummaryEl.classList = "text-center";
    outputSubSummaryEl.textContent = "(between " + outputs.sDate + " and " + outputs.eDate + " for your " + outputs.cryptoAmount + " in " + outputs.cryptoType + ")";
    outputSummaryContainerEl.appendChild(outputSummaryEl);
    outputSummaryContainerEl.appendChild(outputSubSummaryEl);

    var startPriceTitleEl = document.querySelector("#start-price-title");
    startPriceTitleEl.textContent = "Closing price on " + outputs.sDate + ":";

    var startPriceEl = document.querySelector("#start-price");
    startPriceEl.textContent = "1.000 " + outputs.cryptoType + " = " + outputs.sPrice;     

    var endPriceTitleEl = document.querySelector("#end-price-title");
    endPriceTitleEl.textContent = "Closing price on " + outputs.eDate + ":";

    var endPriceEl = document.querySelector("#end-price");
    endPriceEl.textContent = "1.000 " + outputs.cryptoType + " = " + outputs.ePrice;


    var startValueTitleEl = document.querySelector("#start-value-title");
    startValueTitleEl.textContent = "Your value on " + outputs.sDate + ":";

    var startValueEl = document.querySelector("#start-value");
    startValueEl.textContent = outputs.cryptoAmount + " " + outputs.cryptoType + " = " + outputs.sValue;     

    var endValueTitleEl = document.querySelector("#end-value-title");
    endValueTitleEl.textContent = "Your value on " + outputs.eDate + ":";

    var endValueEl = document.querySelector("#end-value");
    endValueEl.textContent = outputs.cryptoAmount + " " + outputs.cryptoType + " = " + outputs.eValue;

}
// Start date selection

$("#start-date").datepicker({ 
    // storing date in a diffrent format from displayed 
    dateFormat: "yy-mm-dd",  
    // making the year and month drop down selectable
    changeYear: true,
    changeMonth: true,
    // setting a min/max date
    minDate: -730,    
    maxDate: 0,
    //setting the max date for the second date picker
    onSelect: function(date){
        var endDate = new Date(date);
        

        $("#end-date").datepicker("option", "minDate", endDate);
        console.dir(endDate);
    }
});

// End date selection
$("#end-date").datepicker({
    // storing date in a diffrent format from displayed  
    dateFormat: "yy-mm-dd", 
    // setting a min date  
    changeYear: true,
    changeMonth: true,
    // setting a min/max date
    minDate: -730,
    maxDate: 0,
    //setting the max date for the second date picker
    onSelect: function(date){
        var selectedDate = new Date(date);
        var startDate = selectedDate;

        $("#start-date").datepicker("option", "maxDate", startDate);
        console.log(selectedDate);
    }
});

