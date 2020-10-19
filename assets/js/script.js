// var container to hold crypto data return
var cryptoContainerEl = document.querySelector("#output");





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

$("#dollar-calc #calculate-button").click(function(event) {
    debugger;
    event.preventDefault();
    var dollarAmount = document.getElementById("dollar-amount").value;
    var cryptoSelected = document.getElementById("crypto-select").value;
    var startTime = document.getElementById("")


    if(dollarAmount === "" || Math.sign(dollarAmount) === -1) {
        alert("Invalid");
    } else if (cryptoSelected === "") {
        alert("Select a cryptocurrency")
    } else {
    console.log(dollarAmount);
    console.log(cryptoSelected);
    };
});

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

