const BASE_URL = "https://api.frankfurter.app/latest";

// Select elements
const amountInput = document.querySelector("#amount");
const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const resultText = document.querySelector("#result");

const fromFlag = document.querySelector("#from-flag");
const toFlag = document.querySelector("#to-flag");

const swapIcon = document.querySelector("#swap");
const swapBtn = document.querySelector("#swap-btn");
const form = document.querySelector("#currency-form");

// ------------------------------
// Populate dropdowns
// ------------------------------
for (let cur in countryList) {
    let option1 = document.createElement("option");
    option1.value = cur;
    option1.textContent = `${cur} - ${countryList[cur].name}`;
    fromCurrency.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = cur;
    option2.textContent = `${cur} - ${countryList[cur].name}`;
    toCurrency.appendChild(option2);
}

// Default values
fromCurrency.value = "USD";
toCurrency.value = "INR";
updateFlags();

// ------------------------------
// Update Flag Function
// ------------------------------
function updateFlags() {
    fromFlag.src = `https://flagsapi.com/${countryList[fromCurrency.value].code}/flat/64.png`;
    toFlag.src = `https://flagsapi.com/${countryList[toCurrency.value].code}/flat/64.png`;
}

fromCurrency.addEventListener("change", updateFlags);
toCurrency.addEventListener("change", updateFlags);

// ------------------------------
// Swap Currencies
// ------------------------------
function swapCurrencies() {
    let temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;

    updateFlags();
}

swapIcon.addEventListener("click", swapCurrencies);
swapBtn.addEventListener("click", swapCurrencies);

// ------------------------------
// Fetch Conversion
// ------------------------------
async function convertCurrency() {
    let amt = amountInput.value;

    if (amt === "" || amt <= 0) {
        resultText.textContent = "Enter a valid amount!";
        return;
    }

    let from = fromCurrency.value;
    let to = toCurrency.value;

    if (from === to) {
        resultText.textContent = `Same currency selected!`;
        return;
    }

    let url = `${BASE_URL}?amount=${amt}&from=${from}&to=${to}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        // console.log(data);

        let converted = data.rates[to];
        resultText.textContent = `${amt} ${from} = ${converted.toFixed(2)} ${to}`;
    } catch (err) {
        resultText.textContent = "Error fetching conversion!";
        console.error(err);
    }
}

// Submit handler
form.addEventListener("submit", function (e) {
    e.preventDefault();
    convertCurrency();
});
