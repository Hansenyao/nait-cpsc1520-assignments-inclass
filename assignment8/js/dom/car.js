import image from 'url:../../img/f1_car.png'


const createCarElement = (name) => {
    let car = document.createElement("div")

    let carImage = document.createElement("img")
    carImage.setAttribute("src", image)
    carImage.classList.add("car")
    let carName = document.createElement("div")
    carName.textContent = name
    
    car.append(carImage)
    car.append(carName)
    return car

}

export { createCarElement }
