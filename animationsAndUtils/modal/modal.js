const initModal = (modal, trigger, closeCls) => {
	if (!modal) {
		return;
	}

	const closeModal = () => {
		modal.classList.remove('show');
		document.removeEventListener('keyup', handleKeyUp);
		trigger.focus();
	};

	const showModal = () => {
		modal.classList.add('show');
		document.addEventListener('keyup', handleKeyUp);
	};

	modal.addEventListener('click', e => {
		if (e.target === modal || e.target.classList.contains(`${closeCls}`)) {
			closeModal();
		}
	});

	const handleKeyUp = e => {
		if (e.key === 'Escape') {
			closeModal();
		}
	};

	showModal();
	trapFocus(modal);
};

const trapFocus = element => {
	const focusableEls = element.querySelectorAll(
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
	);
	const firstFocusableEl = focusableEls[0];
	const lastFocusableEl = focusableEls[focusableEls.length - 1];
	const KEYCODE_TAB = 9;

	setTimeout(() => {
		firstFocusableEl.focus();
	}, 10);

	element.addEventListener('keydown', e => {
		const isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey) {
			/* shift + tab */ if (document.activeElement === firstFocusableEl) {
				lastFocusableEl.focus();
				e.preventDefault();
			}
		} /* tab */ else {
			if (document.activeElement === lastFocusableEl) {
				firstFocusableEl.focus();
				e.preventDefault();
			}
		}
	});
};
