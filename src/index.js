import './style.css';
import { createMenu } from './menu.js';
import { createContact } from './contact.js'
import { createHome } from './home.js';


function pageLoad() {
    createHome()

    const ul = document.createElement("ul")
    const pageBody = document.querySelector(".pageBody")


    const topperList = document.querySelector(".list")

    topperList.appendChild(ul)
    // create topper list and buttons
    const topperLiItems = ["Home", "Menu", "Contact"]
    const topperLiIds = ["home", "menu", "contact"]

    for (let i = 0; i < 3; i++) {
        const li = document.createElement("li")
        const createButton = document.createElement("button")
        ul.appendChild(li)
        ul.setAttribute("class", "topperUl")
        li.appendChild(createButton)
        li.setAttribute("class", "topperLi")
        createButton.innerHTML = topperLiItems[i]
        createButton.setAttribute("class", "button")
        createButton.setAttribute("id", topperLiIds[i])

    }

    const home = document.querySelector("#home")
    const menu = document.querySelector("#menu")
    const contact = document.querySelector("#contact")

    home.addEventListener("click", () => {
        pageBody.innerHTML = "";
        createHome();
    })

    menu.addEventListener("click", () => {
        pageBody.innerHTML = "";
        createMenu();
    })

    contact.addEventListener("click", () => {
        pageBody.innerHTML = "";
        createContact();
    })

}

pageLoad()

export {pageLoad}
