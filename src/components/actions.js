import table from "./table.js"

const selectClassMethod = (method) => {
    switch (method) {
        case "GET":
            return "feed_content-specified-method--get"
        case "DELETE":
            return "feed_content-specified-method--delete"
        case "POST":
            return "feed_content-specified-method--post"
        case "PATCH":
            return "feed_content-specified-method--patch"
        default:
            return "feed_content-specified-method--default"
    }
}

const createActions = (actions) => {
    return (`
        <div class="feed_content-specified">
            ${actions.map(action => {
                const method = action.method.toUpperCase()
                return (`
                    <div>
                        <div class="feed_content-specified-head" id=${action.name}>
                            <h3>${capitalize(action.name)}</h2>
                            <div>
                                <span class="feed_content-specified-method
                                    ${selectClassMethod(method)}">
                                    ${method}
                                </span>
                                <span class="feed_content-specified-path">${action.path}</span>
                            </div>
                        </div>
                        <p>${action.description}</p>
                        ${table(action.table)}
                    </div>
                `)
            }).join("")}
        </div>
    `)
}

export default createActions;