let burger = document.querySelector(".burger");

if (burger) {
	burger.addEventListener("click", handleBurgerClick);
}

function handleBurgerClick(e) {
	let navList = this.nextElementSibling;
	navList.classList.toggle("nav__list_open");
}