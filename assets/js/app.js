$(function () {
	/*______ Lazy Load ______*/

	$(".lazy").lazy({
		scrollDirection: "vertical",
		effect: "fadeIn",
		effectTime: 1000,
		threshold: 0,
		visibleOnly: true,
		placeholder: "../img/ajax-loader.gif",
		onError: function (element) {
			console.log("error loading " + element.data("src"));
		},
	});

	const util = UIkit.util;

	$(".route-img__map, .route-img").addClass("active");

	util.on($("#offcanvas-menu"), "show", function () {
		$(".js__toggle-state").addClass("active");
		$(".btn-menu__text").text("закрыть");
	});

	util.on($("#offcanvas-menu"), "hide", function () {
		$(".js__toggle-state").removeClass("active");
		$(".btn-menu__text").text("меню");
	});

	const svgPrint = util.$(".svg-print");

	UIkit.scrollspy(svgPrint, { repeat: true });

	util.on(svgPrint, "inview", function () {
		$(".svg-print").addClass("vis");
	});
	util.on(svgPrint, "outview", function () {
		$(".svg-print").removeClass("vis");
	});

	const video = util.$(".video-banner video");

	UIkit.scrollspy(video, { repeat: true, hidden: false });

	util.on(video, "inview", function () {
		video.play();
	});
	util.on(video, "outview", function () {
		video.pause();
	});
});
