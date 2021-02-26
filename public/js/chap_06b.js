$(document).ready(function() {
	$('ul#menu li a').hover(function() {
		$(this).stop().animate({
			paddingLeft : "50px"
		}, 400);
	}, function() {
		$(this).stop().animate({
			paddingLeft : "0"
		}, 200);
	});
});