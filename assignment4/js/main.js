// JS file for CPSC1520 – JavaScript 4 Exercise: Making Decisions and Forms
// Student Name: Youfang Yao
// Student ID: 200582794
// Date: 2024-10-15


// Enter your code below.

// Get the form element handle
let orderForm = document.querySelector("#new-order-form");

/**
 * Add the event listener on the Order form that will handle the “submit” event
 * 
 * Prevent the default action and add a new order item using input values
 * 
 */
orderForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    let nameElem = event.target.elements["order-item-name"];
    let priceElem = event.target.elements["order-item-price"];
    let sizeElem = event.target.elements["order-size"];
    let name = nameElem.value;
    let price = priceElem.value;
    let size = sizeElem.value;
    let isFormValid = true;

    // Validate name
    if (isValueNotEmpty(name)) {
      nameElem.classList.remove("is-invalid");
    }
    else {
      nameElem.classList.add("is-invalid");
      isFormValid = false;
    }

    // Validate price
    if (isValueNotEmpty(price) && isGreaterThanFive(Number(price))) {
      priceElem.classList.remove("is-invalid");
    }
    else {
      priceElem.classList.add("is-invalid");
      isFormValid = false;
    }

    // Validate size
    if (isValueNotEmpty(size)) {
      sizeElem.classList.remove("is-invalid");
    }
    else {
      sizeElem.classList.add("is-invalid");
      isFormValid = false;
    }

    // Add new order item
    if (isFormValid) {
      addOrderItem(name, Number(price), size);
    }
  })

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}