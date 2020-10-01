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

	/*______ Video gallery ______*/

	var videoGallery = $(".video-slider .slider").on("init", function (
		event,
		slick
	) {
		$.each(slick.$slides, function (i, el) {
			var $youtube = $(el).find(".youtube"),
				source =
					"https://img.youtube.com/vi/" + $youtube.data("embed") + "/0.jpg",
				image = new Image();

			image.src = source;
			image.addEventListener("load", function () {
				$youtube.append(image);
			});

			$youtube.on("click", function (e) {
				e.preventDefault();
				if ($youtube.parents(".slide").hasClass("slick-current")) {
					var iframe = $("<iframe>", {
						frameborder: 0,
						allowfullscreen: "",
						autoplay: true,
						src:
							"https://www.youtube.com/embed/" +
							$youtube.data("embed") +
							"?rel=0&showinfo=0&autoplay=1",
					});
					//$youtube.html("");
					$youtube.find(".play-btn").fadeOut("350");
					$youtube.find(".youtube__title").fadeOut("350");
					$youtube.find("img").fadeOut("350", function () {
						$youtube.append(iframe);
					});
				}
			});
		});
	});

	videoGallery.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinity: true,
		centerMode: false,
		lazyLoad: "ondemand",
		focusOnSelect: true,
		vertical: false,
		prevArrow: $(this).find(".slide-prev"),
		nextArrow: $(this).find(".slide-next"),
		customPaging: function (slider, i) {
			return '<button><svg viewBox="0 0 120 120" version="1.1"xmlns="http://www.w3.org/2000/svg" class="btn-circle"><circle style="fill: none; stroke: #ffffff; stroke-width: 6px;" cx="60" cy="60" r="50"/></svg></button>';
		},
	});
});
