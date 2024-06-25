const burger = document.querySelector('.burger');
const body = document.body;
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

burger.addEventListener('click', () => {
	body.classList.add('disable-scroll');
	overlay.classList.add('active');
	mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
	body.classList.remove('disable-scroll');
	overlay.classList.remove('active');
	mobileMenu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	body.classList.remove('disable-scroll');
	overlay.classList.remove('active');
	mobileMenu.classList.remove('active');
});

const swiper = new Swiper('.daily-ration__slider', {
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
