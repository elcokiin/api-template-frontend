// data
const dataTemplate = {
    header: {
            urlLogo: "https://platzi.com/favicon.ico",
            apiName: "Api",
    },
    components: [
        {
            id: 1,
            name: "messages",
            path: null,
            description: null,
            methods: {
                get: {
                    description: null,
                    table: [
                        {
                            parameter: null,
                            description: null
                        }
                    ]
                },
                post: {
                    description: null,
                    table: [
                        {
                            parameter: {
                                name: null,
                                required: false,
                            },
                            description: null
                        }
                    ]
                },
            },
        },
        {
            id: 2,
            name: "users",
            path: null,
            description: null,
            methods: {
                get: {
                    description: null,
                    table: [
                        {
                            parameter: null,
                            description: null
                        }
                    ]
                },
                post: {
                    description: null,
                    table: [
                        {
                            parameter: {
                                name: null,
                                required: false,
                            },
                            description: null
                        }
                    ]
                },
            },
        },
        {
            id: 3,
            name: "chats",
            path: null,
            description: null,
            methods: {
                get: {
                    description: null,
                    table: [
                        {
                            parameter: null,
                            description: null
                        }
                    ]
                },
                post: {
                    description: null,
                    table: [
                        {
                            parameter: {
                                name: null,
                                required: false,
                            },
                            description: null
                        }
                    ]
                },
            },
        },
    ]
}
const dt = dataTemplate;

// ___________________________________________

document.title = dt.header.apiName || "Template API"
if(dt.header.urlLogo) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = dt.header.urlLogo;
}

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