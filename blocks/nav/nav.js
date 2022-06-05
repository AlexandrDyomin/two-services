let burger = document.querySelector(".burger");

if (burger) {
	burger.addEventListener("click", handleBurgerClick);
}


function handleBurgerClick(e) {
	let navList = this.nextElementSibling;

	if (navList.classList.contains("nav__list_open")) {
		setTimeout(() => {
			navList.classList.add("nav__list_hidden");
		}, 200);
	} else {
		navList.classList.remove("nav__list_hidden");
	}

	navList.classList.toggle("nav__list_open");
	document.documentElement.classList.toggle("no-scroll");
}