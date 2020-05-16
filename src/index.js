import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.slim.js";
import "../node_modules/popper.js/dist/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../src/style/style.css";
import "../src/component/header.js";
import "../src/component/carousel.js";
import "../src/component/search-box.js";
import "../src/component/inform-list.js";
import "../src/component/copyright.js";
import "../src/component/not-found.js";
import DataSource from "./data/source.js";

const main = () => {

    const bodyElement = document.querySelector("body");
    const dataElement = document.querySelector("inform-list");
    const searchElement = document.querySelector("search-box");
    const notFoundElement = document.createElement("not-found");

    const onButtonClicked = () => {
        if (searchElement.value != "") {
            DataSource.searchPopular(searchElement.value)
                .then(renderResult)
                .catch(fallbackResult)
        }
    };

    const renderResult = results => {
        dataElement.films = results;
    };

    const fallbackResult = message => {
        notFoundElement.message = message;
        bodyElement.appendChild(notFoundElement);
        notFoundElement.clickEvent = fallbackOver;
    };

    const fallbackOver = () => {
        bodyElement.removeChild(notFoundElement);
    }

    searchElement.clickEvent = onButtonClicked;

}

document.addEventListener("DOMContentLoaded", main);