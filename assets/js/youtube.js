/* $(function() {
	var player;

	function initPlayer() {
		function onYouTubeIframeAPIReady(id) {
			player = new YT.Player('player', {
				height: '100%',
				width: '100%',
				videoId: id,
				events: {
					'onReady': onPlayerReady
				}
			});
		}

		function onPlayerReady(event) {
			event.target.playVideo();
		}
		$('.video-frame__preview').on('click', function (event) {
			event.preventDefault();
			var id = $(this).data('id');
			onYouTubeIframeAPIReady(id);
			var that = this;
			$(this).addClass('hidden');
			setTimeout(function () {
				$(that).css('z-index', -1)
			}, 1000)
		});
	};
	initPlayer();
});
 */
