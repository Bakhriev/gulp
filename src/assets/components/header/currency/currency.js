export const toggleCurrency = () => {
	const currencyToggle = document.querySelector(".currency__toggle")
	const currencyMenu = document.querySelector(".currency-menu")

	let opened = false

	currencyToggle.addEventListener("click", () => {
		currencyMenu.classList.toggle("active")
		currencyToggle.setAttribute("aria-expanded", !opened)
		opened = !opened
	})
}

toggleCurrency()
