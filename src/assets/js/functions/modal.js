export const initModal = () => {
	const modal = document.querySelector('.modal');
	const openModalButton = document.querySelector('.modal-trigger');

	if (!modal) {
		return;
	}

	// Close modal and remove listener for keyboard (escape)
	const closeModal = () => {
		modal.classList.remove('show');
		document.removeEventListener('keyup', handleKeyUp);
	};

	// Show modal and add listener for keyboard (escape)
	const showModal = () => {
		modal.classList.add('show');
		document.addEventListener('keyup', handleKeyUp);
	};

	// Close modal on click outside and close btn
	modal.addEventListener('click', event => {
		if (
			event.target === modal ||
			event.target.classList.contains('modal__close')
		) {
			closeModal();
		}
	});

	// Close modal on press escape
	const handleKeyUp = event => {
		if (event.key === 'Escape') {
			closeModal();
		}
	};

	//
	openModalButton.addEventListener('click', () => {
		showModal();
	});
};

initModal();
