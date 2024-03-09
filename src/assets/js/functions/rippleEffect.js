/**
 * @param {string} selector -  CSS selector used to select the elements on which the ripple effect will be applied.
 */

export const rippleEffect = selector => {
	document.querySelectorAll(selector).forEach(elem => {
		elem.addEventListener("click", e => {
			const {offsetLeft, offsetTop} = elem;
			const {clientX, clientY} = e;

			const ripples = document.createElement("span");
			ripples.className = "ripple-effect__circle";
			ripples.style.left = `${clientX - offsetLeft}px`;
			ripples.style.top = `${clientY - offsetTop}px`;

			elem.appendChild(ripples);

			setTimeout(() => {
				ripples.remove();
			}, 1000);
		});
	});
};
