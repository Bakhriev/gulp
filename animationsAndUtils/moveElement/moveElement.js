/**
 * Moves the specified element to a new location within the DOM.
 * @param {string} elem - The CSS selector of the element to be moved.
 * @param {string} where - The CSS selector of the destination where the element will be moved.
 * @param {number} [order=999] - The index/order at which the element will be inserted within the destination. Default is 999.
 */

export const moveElement = (elem, where, order = 999) => {
	const destination = document.querySelector(where)

	destination.insertBefore(
		document.querySelector(elem),
		destination.children[order]
	)
}
