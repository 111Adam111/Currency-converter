const apiKey = `aaf49c3fc24f1f6781d68e0f27f67dd6`;
const inputBox = document.querySelector('#amount');
let outputRate;



let btn =  document.querySelector('#btn');
let convertButton = btn.addEventListener("click", (click) => {
    if (click.target.id == "btn" && inputBox.value &&
        dropDownList.chosenFrom && dropDownList.chosenTo) {          
            main.displayOutput()
            }
})
function getRates() {
    fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}`)
        .then(rawData => rawData.json())
        .then(main.calculate);      
}   


let dropDownList = {
    currencies: [{
        isoCode: "USD",
        country: "United States of America",
        name: "United States Dolar"
    },{
        isoCode: "EUR",
        country: "European Union",
        name: "Euro"
    },{
        isoCode: "GBP",
        country: "Great Britain",
        name: "British Pound"
    },{
        isoCode: "PLN",
        country: "Poland",
        name: "Polish Zloty"
    },{
        isoCode: "JPY",
        country: "Japan",
        name: "Japanese Yen"
    },{
        isoCode: "AUD",
        country: "Australia",
        name: "Australian Dolar"
    },{
        isoCode: "CAD",
        country: "Canada",
        name: "Canadian Dolar"
    },{
        isoCode: "CHF",
        country: "Switzerland",
        name: "Swiss Franc"
    },{
        isoCode: "CNY",
        country: "China",
        name: "Chinese Yuan "
    },{
        isoCode: "HKD",
        country: "Hong Kong",
        name: "Hong Kong Dolar"
    },{
        isoCode: "NZD",
        country: "New Zealand",
        name: "New Zealand Dolar"
    },{
        isoCode: "SEK",
        country: "Sweden",
        name: "Swedish Korona"
    },{
        isoCode: "KRW",
        country: "South Korea",
        name: "Korean Won"
    },{
        isoCode: "SGD",
        country: "Singapore",
        name: "Singapure Dolar"
    },{
        isoCode: "NOK",
        country: "Norway",
        name: "Norwegian Korona"
    },{
        isoCode: "MXN",
        country: "Mexico",
        name: "Mexican Peso"
    },{
        isoCode: "INR",
        country: "India",
        name: "Indian Rupee"
    },{
        isoCode: "RUB",
        country: "Russian Federation",
        name: "Russian Ruble"
    },{
        isoCode: "ZAR",
        country: "South Africa",
        name: "South African Rand"
    },{
        isoCode: "TRY",
        country: "Turkey",
        name: "Turkish Lira"
    },{
        isoCode: "BRL",
        country: "Brazil",
        name: "Brazilian Real"
    },{
        isoCode: "TWD",
        country: "Taiwan",
        name: "Taiwan Dolar"
    },{
        isoCode: "DKK",
        country: "Denmark",
        name: "Danish Krone"
    },{
        isoCode: "THB",
        country: "Thailand",
        name: "Thai Baht"
    },{
        isoCode: "BYR",
        country: "Belarus",
        name: "Belarusian Ruble"
    },{
        isoCode: "HUF",
        country: "Hungary",
        name: "Hungarian Forint"
    },{
        isoCode: "CZK",
        country: "Czech Republic",
        name: "Czech Koruna"
    },{
        isoCode: "ILS",
        country: "Israel",
        name: "Israeli New Shekel"
    },{
        isoCode: "CLP",
        country: "Chile",
        name: "Chilean Peso"
    },{
        isoCode: "PHP",
        country: "Philippines",
        name: "Philippine Peso"
    },{
        isoCode: "AED",
        country: "United Arab Emirates",
        name: "United Arab Emirates Dirham"
    },{
        isoCode: "COP",
        country: "Colombia",
        name: "Colombian Peso"
    },{
        isoCode: "SAR",
        country: "Saudi Arabia",
        name: "Saudi Riyal"
    },{
        isoCode: "MYR",
        country: "Malaysia",
        name: "Malaysian Ringgit"
    },{
        isoCode: "RON",
        country: "Romania",
        name: "Romanian Leu"
    }],
    chosenFrom: '',
    chosenTo: '',
    listStringFrom: '',
    listStringTo: '',
    arrowFrom: document.querySelector('#arrowFrom'),
    arrowTo: document.querySelector('#arrowTo'),
    textFrom: document.querySelector('.textFrom'),
    textTo: document.querySelector('.textTo'),
    listFrom: document.querySelector('#listFrom'),
    listTo: document.querySelector('#listTo'),
    selectFieldFrom: document.querySelector('.selectFieldFrom'),
    selectFieldTo: document.querySelector('#selectFieldTo'),
    choiceBoxFrom: document.querySelector(".choiceBoxFrom"),
    choiceBoxTo: document.querySelector(".choiceBoxTo"),
    background: document.querySelector('.background')
        .addEventListener("click", () =>
            dropDownList.close()
        ,false),

    selectFieldFrom: document.querySelector('.selectFieldFrom')
        .addEventListener("click", (element) => {
            dropDownList.toggleFrom();
            element.stopPropagation()
        }, false),

    selectFieldTo: document.querySelector('#selectFieldTo')
        .addEventListener("click", (element) => {
            dropDownList.toggleTo();
            element.stopPropagation()
        }, false),

    close() {
        this.listFrom.classList.add("hide")
        this.listTo.classList.add("hide")
        this.arrowFrom.classList.remove("inverted")
        this.arrowTo.classList.remove("inverted")
    },   

    createFrom() {
        for (let currency of this.currencies) {
            this.listStringFrom += 
            `<li class="options" 
            onClick="dropDownList.choiceFrom('${currency.isoCode}')">
            <img src="flags/${currency.country}.png">
            <p>${currency.name}</p>
            <p>${currency.isoCode}</p>
            </li>`
        }
        console.log(this.listStringFrom)
        return this.listFrom.innerHTML = this.listStringFrom
    },
    
    createTo() {
        for (let currency of this.currencies) {
            this.listStringTo += 
            `<li class="options" 
            onClick="dropDownList.choiceTo('${currency.isoCode}')">
            <img src="flags/${currency.country}.png">
            <p>${currency.name}</p>
            <p>${currency.isoCode}</p>
            </li>`
        }
        return this.listTo.innerHTML = this.listStringTo
    },

    choiceFrom(currency) {
        let idx = this.currencies.findIndex(obj => obj.isoCode === currency)
        
        this.choiceBoxFrom.innerHTML = `
        <img src="flags/${this.currencies[idx].country}.png">
        <p>${this.currencies[idx].name}</p>`
        this.chosenFrom = currency
        this.textFrom.innerHTML = "From"
        // main.calculate()
        earlyOutput()

        
        
    }, 

    choiceTo(currency) {
        let idx = this.currencies.findIndex(obj => obj.isoCode === currency)
        
        this.choiceBoxTo.innerHTML = `
        <img src="flags/${this.currencies[idx].country}.png">
        <p>${this.currencies[idx].name}</p>`
        this.chosenTo = currency
        this.textTo.innerHTML = "To"
        // main.calculate()
        earlyOutput()
        

    },

    toggleFrom() {
        this.arrowFrom.classList.toggle("inverted")
        this.listFrom.classList.toggle("hide")
        if (!this.listTo.className) {
                this.toggleTo()
        }
    },
 
    toggleTo(){
        this.arrowTo.classList.toggle("inverted")
        this.listTo.classList.toggle("hide")
    }
  
}

let main = {
    calculate(rawData) {
        let exRateFrom = rawData.rates[dropDownList.chosenFrom];
        let exRateTo = rawData.rates[dropDownList.chosenTo];
        let rate = exRateTo / rawData.rates.EUR / exRateFrom;
        let invertedRate = exRateFrom / rawData.rates.EUR / exRateTo;
        main.displayEarlyResults(rate, invertedRate)
        outputRate = rate;
    },

    displayEarlyResults(rate, invertedRate)  {
        
        let earlyResultFrom = document.querySelector('#earlyResultsLeft');
        let earlyResultTo = document.querySelector('#earlyResultsRight');
        earlyResultFrom.innerHTML =
            `1 ${dropDownList.chosenFrom} = ${rate.toFixed(2)} ${dropDownList.chosenTo}`;
        earlyResultTo.innerHTML =
            `1 ${dropDownList.chosenTo} = ${invertedRate.toFixed(2)} ${dropDownList.chosenFrom}`;
        console.log(earlyResultFrom.innerHTML)


    },
    
      
    results: [],
    displayOutput(){
        // let earlyResultFrom = document.querySelector('#earlyResultsLeft');
        // let rate = earlyResultFrom.innerHTML;
        let displayResult = document.querySelector('#result');
        let displayResultTwo = document.querySelector('#resultTwo');
        let displayResultThree = document.querySelector('#resultThree');
        result = outputRate * inputBox.value
        let displayString = `${result.toFixed(2)} ${dropDownList.chosenTo}`
        this.results.unshift(displayString);
        displayResult.innerHTML = this.results[0] ? this.results[0] : "";
        displayResultTwo.innerHTML = this.results[1] ? this.results[1] : "";
        displayResultThree.innerHTML = this.results[2] ? this.results[2] : "";
            
    }
}

function earlyOutput() {
    if (dropDownList.chosenFrom && dropDownList.chosenTo) {
            getRates();
            
        }}



dropDownList.createFrom()
dropDownList.createTo()
