$(document).ready(function() {
	$("#galerie a").append("<span></span>");
	$("#galerie a").hover(function() {
		$(this).children("span").stop().fadeIn(600);
	}, function() {
		$(this).children("span").stop().fadeOut(200);
	});
});