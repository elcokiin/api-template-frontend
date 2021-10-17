import { $, capitalize } from "../services"

const insertDataComponents = (components) => {
    const $feedContentElement = $(".feed_content")
    components.forEach(component => {
        const content = (`
            <div class="feed_content-component">
                <a class="feed_content-title"
                    id="${component.id}"
                    href="/#${component.id}">
                    ${capitalize(component.name)}
                </a>
                ${createActions(component.actions)}
            </div>
        `)
        $feedContentElement.innerHTML += content
    })
}

const feed = ({ header, components }) => {
    const $title = $(".feed_title")
    $title.innerHTML = header.apiName
    insertDataComponents(components)
}

export default feed