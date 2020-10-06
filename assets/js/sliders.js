$(function () {
	/*______ Voyage slider ______*/

	$(".slider-voyage .slider").slick({
		infinite: false,
		dots: false,
		arrows: false,
		autoplay: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		lazyLoad: "progressive",
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

	$(".comments-slider .slider").slick({
		infinite: false,
		dots: false,
		arrows: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: "progressive",
		variableWidth: true,
		customPaging: function (slider, i) {
			return '<button><svg viewBox="0 0 120 120" version="1.1"xmlns="http://www.w3.org/2000/svg" class="btn-circle"><circle style="fill: none; stroke: #ffffff; stroke-width: 6px;" cx="60" cy="60" r="50"/></svg></button>';
		},
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1,
					dots: false,
					variableWidth: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
					variableWidth: false,
				},
			},
		],
	});
});
