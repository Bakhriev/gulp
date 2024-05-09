export const initModal = () => {
	const modal = document.querySelector('.modal');
	const openModalButton = document.querySelector('.modal-trigger');

	if (!modal) {
		return;
	}

	const closeModal = () => {
		modal.classList.remove('show');

		document.removeEventListener('keyup', handleKeyUp);
	};

	modal.addEventListener('click', e => {
		if (e.target === modal || e.target.classList.contains('modal__close')) {
			closeModal();
		}
	});

	const handleKeyUp = e => {
		if (e.key === 'Escape') {
			closeModal();
		}
	};

	openModalButton.addEventListener('click', () => {
		modal.classList.add('show');

		document.addEventListener('keyup', handleKeyUp);
	});
};

initModal();
