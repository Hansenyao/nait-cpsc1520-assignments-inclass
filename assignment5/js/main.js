// JS file for CPSC1520 – JavaScript 5 Exercise: Arrays and Loops
// Student Name: Youfang Yao
// Student ID: 200582794
// Date: 2024-10-29


const innerCarousel = document.querySelector('.carousel-inner')
const savedList = document.querySelector('#saved-images')

// change the following array include the image names.
let images = ["cat.jpg","fox.jpg","gecko.jpg","leopard.jpg","panda.jpg","polar_bear.jpg","turtle.jpg"]


let savedImages = []

/**
 * Adds an item to the list with the specified index.
 * @param {string} imageName - The name of the image.
 * @returns {void}
 */
const addToSavedImageList = (imageName, index) => {
  savedList.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <img src="img/${imageName}" class="img-thumbnail" alt="image at ${index}">
      <div class="ms-2 me-auto">
        <div class="fw-bold">Saved Image ${index + 1}</div>
      </div>
      <button class="btn btn-danger" data-index="${index}">remove</span>
    </li>`
}

/**
 * Creates a carousel item with the specified image name and index.
 * @param {string} imageName - The name of the image.
 * @param {number} index - The index of the carousel item.
 * @returns {void}
 */
const createCarouselItem = (imageName, index) => {
  let activeItem = 0
  if (index === 0) {
    activeItem = 'active'
  }
  innerCarousel.innerHTML += `<div class="carousel-item ${activeItem}">
      <img src="img/${imageName}" class="d-block w-100" alt=${imageName}">
      <div class="container">
        <div class="carousel-caption text-start">
          <h1>Image ${index + 1} (at index ${index})</h1>
          <p><button class="btn btn-lg btn-primary" data-index="${index}" href="#">Save Image</button></p>
        </div>
      </div>
    </div>
  `
}

// step 1: render the items to the the carousel..

// Enter your code below.

// This function will render carousel images
const renderCarousel = () => {
  images.forEach((fileName, index) => {
    createCarouselItem(fileName, index)
  });
}

// To render images
renderCarousel();

// step 2 - carousel button clicks adds to saved list
innerCarousel.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return
  }
  const itemIndex = parseInt(event.target.getAttribute('data-index'))
  console.log(`data-index:${itemIndex}`);

  // your code for step 2 below
  
  // Save the selected file name to the savedImage array if it does not in the list
  // And then render the savedList
  if (!savedImages.includes(images[itemIndex])) {
    savedImages.push(images[itemIndex]);
    renderImageList();
  }
})

// This function renders the saved images list
const renderImageList = () => {
  savedList.innerHTML = "";
  savedImages.forEach((fileName, index) => {
    addToSavedImageList(fileName, index);
  })
}

// step 3 - my images button clicks removes from saved list
savedList.addEventListener('click', (event) => {
  if (event.target.tagName !== 'BUTTON') {
    return
  }
  const itemIndexToRemove = parseInt(event.target.getAttribute('data-index'))

  // your code for step 3 below
  
  // Remove the selected image from savedImages and render the list
  savedImages.splice(itemIndexToRemove, 1);
  renderImageList();
})
