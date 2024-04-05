const selects = document.querySelectorAll('.select');

const initSelect = () => {
	selects.forEach(select => {
		const btn = select.querySelector('.select__toggle');
		const selectValue = select.querySelector('.select__value');
		const options = select.querySelectorAll('.select-menu__option');

		select.addEventListener('click', e => {
			if (e.target.closest('.select-menu__option')) {
				onClickOption(options, e.target, selectValue);
				collapseSelect();
				removeAriaExpanded();
			}
		});

		btn.addEventListener('click', () => {
			collapseSelect(select);
			setAriaExpanded(btn);
		});
	});
};

document.addEventListener('click', e => {
	if (!e.target.closest('.select')) {
		collapseSelect();
		setAriaExpanded();
	}
});

const collapseSelect = currentSelect => {
	currentSelect?.classList.toggle('active');
	selects.forEach(select => {
		if (select !== currentSelect) select.classList.remove('active');
	});
};

const onClickOption = (options, option, selectValue) => {
	options.forEach(option => option.setAttribute('aria-checked', 'false'));
	option.setAttribute('aria-checked', 'true');
	selectValue.value = option.dataset.value;
};

const setAriaExpanded = elem => {
	if (!elem) {
		removeAriaExpanded();
		return;
	}
	removeAriaExpanded();
	const isEpxanded = elem.getAttribute('aria-expanded') === 'true';
	elem.setAttribute('aria-expanded', isEpxanded ? 'false' : 'true');
};

const removeAriaExpanded = () => {
	document
		.querySelectorAll('.select__toggle')
		.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
};

initSelect();
