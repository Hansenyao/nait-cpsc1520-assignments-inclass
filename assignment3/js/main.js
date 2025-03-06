// Enter your code below.

// JS file for CPSC1520 – In-Class-3: Event Listeners
// Student Name: Youfang Yao
// Student ID: 200582794
// Date: 2024-10-01

// Exercise Step 1 – Show the Javascript Resources
let divElem = document.querySelector("div.javascript-resources");
let button = document.querySelector("#show-resources");
button.addEventListener("click", () => {
    divElem.classList.remove("d-none");
});

// Exercise Step 2 – Add font boldness on the links when you hover over an item.
divElem.addEventListener("mouseover", (event) => {
    console.log(`event.target: ${event.target.innerHTML}`);
    event.target.classList.add("fw-bold");
});

// Exercise Step 3 – Remove the font boldness on the links when you move your mouse away
divElem.addEventListener("mouseout", (event) => {
    event.target.classList.remove("fw-bold");
});

// Exercise Step 4 – Italicize a clicked item.
divElem.addEventListener("click", (event) => {
    event.target.classList.add("fst-italic");
});
