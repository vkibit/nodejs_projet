$(document).ready(function() {
	$("ul.thumb li img").hover(
			function(){
				$(this).css("z-index", "99");
				$(this).stop().animate({
					"margin-top":"-90px",
					"margin-left":"-50px",
					"top":"50%",
					"left":"50%",
					"width":"530px",
					"height":"360px"
				}, 200);
			}, 
			function(){
				$(this).stop().animate({
					"margin-top":"0",
					"margin-left":"0",
					"top":"0",
					"left":"0",
					"width":"90px",
					"height":"60px"
				}, 400);
				$(this).css("z-index", "0");
			});
});