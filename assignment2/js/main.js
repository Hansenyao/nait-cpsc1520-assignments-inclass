// Enter your code below.

// JS file for CPSC1520 – JavaScript 2 Exercise: Introduction to Functions
// Student Name: Youfang Yao
// Student ID: 200582794
// Date: 2024-09-17


// Output a string in console
console.log("javascript calculator linked.");

// Get and return a element value
const getElementValue = (selecter) => {
    let elem = document.querySelector(selecter);
    return elem.innerText;
}

// Calculate the multiply of 2 values
const multiply = (firstValue, secondValue) => {
    return firstValue * secondValue;
}

// Update the "result" element text
const updateResult = () => {
    let firstValue = parseInt(getElementValue("#first-value"));
    let secondValue = parseInt(getElementValue("#second-value"));
    let result = multiply(firstValue, secondValue);
    document.querySelector("#result").innerText = result;
}

// Call this function so that the result is updated every time when the page is reloaded
updateResult();