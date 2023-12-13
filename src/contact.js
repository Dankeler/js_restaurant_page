

function createContact() {
    const pageBody = document.querySelector(".pageBody")

    const h1 = document.createElement("h1")
    const p = document.createElement("p")

    pageBody.appendChild(h1)
    h1.innerHTML = "Contact Us!"

    pageBody.appendChild(p)
    p.innerHTML = "+59 346 123 432"

}

export {createContact}