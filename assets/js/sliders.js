$(function () {

	/*______ Voyage slider ______*/

	$('.slider-voyage .slider').slick({
		infinite: false,
		dots: false,
		arrows: false,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		lazyLoad: 'progressive',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	})

});
