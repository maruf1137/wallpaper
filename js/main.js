(function ($) {
	'use strict';

	$('.brand-active').owlCarousel({
		loop: true,
		margin: 30,
		smartSpeed: 9000,
		autoplay: 1000,
		nav: false,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: {
			0: {
				items: 5,
			},
		},
	});

	$('.slider-active').owlCarousel({
		loop: true,
		margin: 5,

		nav: false,
		responsive: {
			0: {
				items: 3,
			},
		},
	});

	$(document).ready(function () {
		/* Small card slider */
		$('.slider').slick({
			arrows: false,
			dots: false,
			slidesToShow: 2,
		});

		const slider = $('.slider');
		var scrollCount = null;
		var scroll = null;

		slider.on('wheel', function (e) {
			e.preventDefault();

			clearTimeout(scroll);
			scroll = setTimeout(function () {
				scrollCount = 0;
			}, 200);
			if (scrollCount) return 0;
			scrollCount = 1;

			if (e.originalEvent.deltaY < 0) {
				$(this).slick('slickNext');
			} else {
				$(this).slick('slickPrev');
			}
		});

		/* Big cards slider */
		$('.slider-big-cards').slick({
			arrows: false,
			dots: false,
			slidesToShow: 2,
		});
	});
})(jQuery);
