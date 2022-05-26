let burger = document.querySelector(".burger");

if (burger) {
	burger.addEventListener("click", handleBurgerClick)
}

function handleBurgerClick() {
	this.classList.toggle("burger_active");
}