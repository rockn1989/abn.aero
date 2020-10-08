$(function () {
	/*______ Header fixed animation ______*/

	$(".header-fixed").addClass("visible");

	/*______ Close offcanvas menu ______*/

	$(".uk-nav a").on("click", function () {
		UIkit.offcanvas($("#offcanvas-menu")).hide();
		$(".js__toggle-state").removeClass("active");
		$(".btn-menu__text").text("меню");
	});

	/*______ Lazy Load ______*/

	$(".lazy").lazy({
		appendScroll: $("section.section"),
		scrollDirection: "vertical",
		effect: "fadeIn",
		effectTime: 1000,
		threshold: 0,
		visibleOnly: true,

		onError: function (element) {
			console.log("error loading " + element.data("src"));
		},
	});
});

$(function () {
	const util = UIkit.util;

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
		//video.play();
	});
	util.on(video, "outview", function () {
		//video.pause();
	});
});

$(function () {
	$("#pagepiling").pagepiling({
		sectionsColor: [
			"transparent",
			"#0365DF",
			"#ffffff",
			"#ffffff",
			"#0365DF",
			"#ffffff",
		],
		anchors: ["desc", "plan", "plain", "comments", "price", "map"],
		menu: "#menu",
		navigation: false,
		afterRender: function () {
			$("#pp-nav").addClass("custom");
		},
		afterLoad: function (anchorLink, index) {
			if (index > 1) {
				$("#pp-nav").removeClass("custom");
			} else {
				$("#pp-nav").addClass("custom");
			}
		},
	});
});
