import { pageLoad } from "./index";


function createMenu() {
    const h1 = document.createElement("h1")
    const ul = document.createElement("ul")
    const li = document.createElement("li")

    const pageBody = document.querySelector(".pageBody")

    pageBody.appendChild(h1)
    h1.innerHTML = "Today's Menu"

    pageBody.appendChild(ul)

    const MenuItems = ["Rotisserie Strike", "Raw Heat Strike", "Concasee", "Joue Shot", "Party Table Kick Course"]

    
    for (let i = 0; i < 4; i++) {
        const li = document.createElement("li")
        ul.appendChild(li)
        li.innerHTML = MenuItems[i]
        li.setAttribute("class", "menuItems")
    }

}

export { createMenu };