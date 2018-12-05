$(document).ready(function(){

	// hide #back-top first
	$("#Top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#Top').fadeIn();
			} else {
				$('#Top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#Top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});