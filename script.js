const apiKey = `aaf49c3fc24f1f6781d68e0f27f67dd6`;
const inputBox = document.querySelector('.amount');
inputBox.addEventListener('keypress', keyPress);


function keyPress(enter) {
    if (enter.keyCode == 13) {
        getRates();            
    }
}

function getRates() {
        fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`)
            .then(rawData => rawData.json())
            .then(main);
            
}


// Creating conventional date format from timestamp
function formatTime(timeStamp) {  
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours() - 2;
    let minutes = '0' + date.getMinutes();
    let seconds = '0' + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}


// Switching date to day-month-year format
function formatDate(switchedDate) {
    let parts = switchedDate.split('-');
    return `${parts[2]}-${parts[1]}-${parts[0]}`
}   


function clearButton () {
    document.getElementById('amount').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('rate').innerHTML = '';
    document.getElementById('time-date').innerHTML = '';
}


function main(rawData) {
    // currency selectors
    let selectionFrom = document.querySelector('select#from').value;
    let selectionTo = document.querySelector('select#to').value; 
    let exRateFrom = rawData.rates[selectionFrom];
    let exRateTo = rawData.rates[selectionTo];
    // calculation
    let rate = exRateTo / rawData.rates.EUR / exRateFrom;
    let result = inputBox.value * rate;
    // display output
    let displayResult = document.querySelector('#result');
    displayResult.innerHTML = `result: ${result.toFixed(2)} ${selectionTo}`;
    let displayRate = document.querySelector('#rate');
    displayRate.innerHTML = `rate: ${rate.toFixed(5)}`;
    let displayDate = document.querySelector('#time-date');
    displayDate.innerHTML = `Rate updated at: ${formatTime(rawData.timestamp)} UTC ${formatDate(rawData.date)}`;
    
}


