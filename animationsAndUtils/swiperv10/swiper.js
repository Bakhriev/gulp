// core version + navigation, pagination modules:
import Swiper from "swiper"
import {
	Navigation,
	Pagination,
	Scrollbar,
	Autoplay,
	EffectCoverflow,
} from "swiper/modules"
// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const swiper1 = new Swiper(".swiper-1", {
	direction: "horizontal",
	slidesPerView: "auto",
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	initialSlide: 2,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 600,
		modifier: 1,
		slideShadows: true,
	},

	// Modules
	modules: [EffectCoverflow],
})
