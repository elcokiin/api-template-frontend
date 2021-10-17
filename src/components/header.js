import { $, toggleButton } from "../services"

const insertLogo = (urlLogo, apiName) => {
    const $logo = $("#logo");
    let insert
    if(urlLogo) {
        const img = `<img src="${urlLogo}" alt=${apiName} class="head_logo"/>`
        insert = img;
    }
    else {
        insert = `<h2 class="header_text">${apiName}</h1>`
    }
    $logo.innerHTML = insert
}

const header = (data) => {
    const $components = $(".header_logo-components")
    insertLogo(data.urlLogo, data.apiName)

    $components.addEventListener("click", () => {
        toggleButton({
            className: "header_container-components",
            classAdd: "header_container-components--active"
        })
    })
}

export default header