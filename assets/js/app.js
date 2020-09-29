$(function () {
/* 	const path = document.querySelector('.route-map path')
	var length = path.getTotalLength();
	// Clear any previous transition
	path.style.transition = path.style.WebkitTransition = 'none';
	// Set up the starting positions
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	// Trigger a layout so styles are calculated & the browser
	// picks up the starting position before animating
	path.getBoundingClientRect();
	// Define our transition
	path.style.transition = path.style.WebkitTransition =
		'stroke-dashoffset 2s ease-in-out';
	// Go!
	path.style.strokeDashoffset = '0';
	path.style.strokeDasharray = '0, 16' */

	$('.route-img__map, .route-img').addClass('active');


	UIkit.util.on($('#offcanvas-menu'),'show', function () {
		$('.js__toggle-state').addClass('active');
		$('.btn-menu__text').text('закрыть')
	});

	UIkit.util.on($('#offcanvas-menu'), 'hide', function () {
		$('.js__toggle-state').removeClass('active');
		$('.btn-menu__text').text('меню')
	});

});
