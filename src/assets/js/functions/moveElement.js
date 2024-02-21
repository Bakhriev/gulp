export const moveElement = (elem, where, order = 999) => {
	const destination = document.querySelector(where)

	destination.insertBefore(
		document.querySelector(elem),
		destination.children[order]
	)
}

// moveElement(document.querySelector(".img"), document.querySelector(".right"), 2)
