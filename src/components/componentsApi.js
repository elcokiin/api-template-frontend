import { $, toggleButton, capitalize } from "../services"

const foreachComponents = (components) => {
    const container = $(".header_container-components--content")
    components.forEach(component => {
        container.innerHTML += `
        <h3>
            <a href="/#${components.id}" class="header_text">
                ${capitalize(component.name)}
            </a>
        </h3>
        `
    })
}

const components = (data) => {
    const $closeC = $(".close_components")

    $closeC.addEventListener("click", () => {
        toggleButton({
            className: "header_container-components",
            classAdd: "header_container-components--active"
        })
    })
    foreachComponents(data)
}

export default components