import { $, toggleButton, capitalize } from "../services"

const foreachComponents = (components) => {
    const container = $(".header_container-components--content")
    container.innerHTML = components.map(component => (`
        <div class="header_component">
            <a href="/#${component.id}" class="header_text header_component--title">
                ${capitalize(component.name)}
            </a>
            <ul class="header_list">
                ${component.actions.map(action => (`
                    <li>
                        <a href="/#${action.name}" class="header_text header_text--list">
                            ${action.name}
                        </a>
                    </li>
                `)).join("")}
            </ul>
        </div>
    `)).join("")
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