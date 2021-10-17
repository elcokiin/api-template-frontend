const table = (dTable) => {
    if(!dTable) {
        return ""
    }
    return (`
        <table class="table_params-description">
            <thead>
                <tr>
                    <th class="table_params-description--item">Parameter</th>
                    <th class="table_params-description--item">Description</th>
                </tr>
            </thead>
            <tbody>
                ${dTable.map(item => (`
                    <tr>
                        <td class="table_params-description--item">
                            ${item.parameter.value}
                            ${item.parameter.required ? (
                                '<span class="required">required</span>'
                            ): ""}
                        </td>
                        <td class="table_params-description--item">
                            ${item.description}
                        </td>
                    </tr>
                `)).join("")}
            </tbody>
        </table>
    `)
}

export default table;