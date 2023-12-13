import Icon from './pizza.jpg';


function createHome() {
    const img = document.createElement("img")
    const h1 = document.createElement("h1")
    const pageBody = document.querySelector(".pageBody")
    
    // create body
    pageBody.appendChild(h1)
    h1.setAttribute("class", "pageBodyDesc")
    h1.innerHTML = "Welcome to PizzaPalace!"
    // append img
    pageBody.appendChild(img)
    img.src = Icon;
}

export { createHome }