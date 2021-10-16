// data
const dataTemplate = {
    header: {
        urlLogo: "https://avatars.githubusercontent.com/u/79155327?s=96&v=4",
        apiName: "Api",
    },
    components: [
        {
            id: 1,
            name: "messages",
        },
        {
            id: 2,
            name: "users",
        },
        {
            id: 3,
            name: "chats",
        },{
            id: 3,
            name: "chats",
        },
    ]
}
const dt = dataTemplate;

// ___________________________________________

// general services

const $ = (i) => {
    return document.querySelector(i);
}

const toggleButton = ({ className, classAdd, cb }) => {
    const $button = $(`.${className}`)
    const toggle = $button.classList.toggle(classAdd)
    if(cb) {
        cb(toggle)
    }
}

const capitalize = str => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}

// header

const insertLogo = (urlLogo, apiName) => {
    const $logo = $("#logo");
    let insert
    if(urlLogo) {
        const img = `<img src="${urlLogo}" alt=${apiName} class="head_logo"/>`
        console.log(img)
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

// slide components
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


header(dt.header)
components(dt.components)