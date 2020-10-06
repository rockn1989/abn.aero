$(function () {
	const successModal = UIkit.modal($("#success-modal"));
	const signUpModal = UIkit.modal($("#sign-up-modal"));

	$(".default-form input, .default-form textarea").on("focus", function () {
		$(this).siblings('label:not([class="error"])').addClass("focus");
	});

	$(".default-form input, .default-form textarea").on("blur", function () {
		if ($(this).val().length <= 1) {
			$(this).siblings("label").removeClass("focus");
		}
	});

	/*______ Form validation ______*/

	$(".sign-up-form").validate({
		ignore: ".ignore",
		rules: {
			["user-name"]: {
				required: true,
			},
			["user-tel"]: {
				required: true,
			},
		},
		messages: {
			["user-name"]: "Неправильно заполнено поле",
			["user-tel"]: "Неправильно заполнено поле",
		},
		submitHandler: function () {
			$.ajax({
				method: "POST",
				url: "https://jsonplaceholder.typicode.com/posts",
				data: $(".sign-up-form").serialize(),
				beforeSend: function () {
					$(".sign-up-form").css("opacity", 0.5);
				},
			})
				.done(function (msg) {
					$(".sign-up-form")[0].reset();
					successModal.show();
				})
				.fail(function (msg) {
					console.log(msg);
				})
				.always(function () {
					$(".sign-up-form").css("opacity", 1);
				});
		},
	});

	/*______ Form Mask ______*/

	$(".js__input-phone")
		.mask("+7 999 999-99-99", { clearIfNotMatch: true })
		.focus(function (e) {
			if (!$(this).val()) {
				$(this).val("+7 ");
			}
		});
});
