export const initModal = (modal, trigger, closeCls) => {
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
