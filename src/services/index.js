export const $ = (i) => {
    return document.querySelector(i);
}

export const toggleButton = ({ className, classAdd, cb }) => {
    const $button = $(`.${className}`)
    const toggle = $button.classList.toggle(classAdd)
    if(cb) {
        cb(toggle)
    }
}

export const capitalize = str => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
}