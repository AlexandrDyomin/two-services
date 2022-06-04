import { tns } from "tiny-slider";
import "./layouts/layout.js";


tns({
    container: ".serv__slider",
    gutter: 20,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controlsText: ["", ""],
    autoHeight: true,
    slideBy: 1,
    responsive: {
        640: {
            fixedWidth: 380,
             autoplay: true
        },
        1000: {
            fixedWidth: 445
        }
    }
});


let casesSlider = document.querySelector(".cases__slider");
let casesSliderClone = casesSlider.cloneNode(true);
let settingsSlider = {
    container: ".cases__slider",
    gutter: 20,
    navPosition: "bottom",
    controlsPosition: "bottom",
    controlsText: ["", ""],
    autoHeight: true,
    responsive: {
        640: {
            items: 2,
            autoplay: true
        }
    }
}


let slider;


if (window.screen.width > 899) {
    destroySlider();
} else {
    slider = tns(settingsSlider);
}


setTimeout(addChevrons, 0);


window.addEventListener("resize", handleWindowResize);


function handleWindowResize() {
    if (window.screen.width > 899 && slider) {
        destroySlider();
    }


    if (window.screen.width < 900 && slider === undefined) {
        casesSlider = document.querySelector(".cases__slider");
        casesSlider.parentNode.replaceChild(casesSliderClone, casesSlider);


        casesSliderClone = casesSliderClone.cloneNode(true);
        slider = tns(settingsSlider);
        setTimeout(addChevrons, 0);
    }
}


function addChevrons() {
    let controls = document.querySelectorAll(".tns-controls");
    let chevron = '<svg width="12" height="18" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4149 0L0.584961 2.83003L9.75493 12L0.584961 21.17L3.4149 24L15.4149 12L3.4149 0Z" fill="#A8A7DB"/></svg>';


    if (controls.length > 0) {
        controls.forEach((item, i) => {
            item.firstChild.innerHTML = chevron;
            item.lastChild.innerHTML = chevron;
        })
    }
}


function destroySlider() {
    slider?.destroy();
    slider = undefined;


    let casesSlider = document.querySelector(".cases__slider");
    casesSlider.classList.add("cases__slider_no-slider");


    let casesColumn = document.createElement("div");
    casesColumn.className = "cases__column";


    let selectors = [
        ".cases__slider > .cases__slider-item:nth-child(3n + 1)",
        ".cases__slider > .cases__slider-item:nth-child(2n + 1)",
        ".cases__slider > .cases__slider-item"
    ]


    selectors.forEach((item, i) => {
        let cards = document.querySelectorAll(item);
        let clone = casesColumn.cloneNode();


        cards.forEach(item => {
            clone.append(item);
        })


        casesSlider.append(clone)
    })
}