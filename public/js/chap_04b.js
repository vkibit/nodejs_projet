// Fonction zoom_image
this.zoom_image = function() {
	xOffset = 10;
	yOffset = 30;
	$("a.zoom").hover(
			function(e) {
				this.texte = this.title;
				this.title = "";
				var legende = (this.texte != "") ? "<br/>" + this.texte : "";
				$("body").append(
						"<p id='zoom'><img src='" + this.href
								+ "' alt='Visualisation image' />" + legende
								+ "</p>");
				$("#zoom").css("top", (e.pageY - xOffset) + "px").css("left",
						(e.pageX + yOffset) + "px").fadeIn("slow");
			}, function() {
				this.title = this.texte;
				$("#zoom").remove();
			});
	$("a.zoom").mousemove(
			function(e) {
				$("#zoom").css("top", (e.pageY - xOffset) + "px").css("left",
						(e.pageX + yOffset) + "px");
			});
};

$(document).ready(function() {
	// Zoom au survol d'une image
	zoom_image();
});