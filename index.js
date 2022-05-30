import { tns } from "tiny-slider";
import "./layouts/layout.js";


tns({
    container: ".serv__slider",
    gutter: 20,
	navPosition: "bottom",
	controlsPosition: "bottom",
	controlsText: ["", ""],
	autoHeight: true,
    // autoplay: true,
});


tns({
    container: ".cases__slider",
    gutter: 20,
	navPosition: "bottom",
	controlsPosition: "bottom",
	controlsText: ["", ""],
	autoHeight: true,
    // autoplay: true,
});


setTimeout(() => {
	let controls = document.querySelectorAll(".tns-controls");
	let chevron = '<svg width="12" height="18" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.4149 0L0.584961 2.83003L9.75493 12L0.584961 21.17L3.4149 24L15.4149 12L3.4149 0Z" fill="#A8A7DB"/></svg>';
	

	if ( controls.length > 0) {
		controls.forEach((item, i) => {
			item.firstChild.innerHTML = chevron;
			item.lastChild.innerHTML = chevron;
		})
	}
}, 0)