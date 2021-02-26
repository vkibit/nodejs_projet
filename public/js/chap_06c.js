$(document).ready(function() {
	$("ul.hover_bloc li img").hover(
		function() {
			$(this).stop().animate(
					{left : "300px"}, 
					{duration : 500
			});
	}, function() {
			$(this).stop().animate(
					{left : "8px"}, 
					{duration : 500
			});
	});
});