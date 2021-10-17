import dt from "./config"
import "./style/style.css"

import header from "./components/header"
import componentsApi from "./components/componentsApi"
import feed from "./components/feed"

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

header(dt.header)
componentsApi(dt.components)
feed(dt)