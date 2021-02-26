$(document).ready(function() {
	$(".image").fadeTo("slow", 0.25);
	$(".image").hover(function() {
		$(this).stop().fadeTo("slow", 1.0);
	}, function() {
		$(this).stop().fadeTo("fast", 0.25);
	});
});