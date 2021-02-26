$(document).ready(function() {
	// Couleur de fond au survol de la souris
	$("p").bind("mouseenter mouseleave", function(e) {
		$(this).toggleClass("over");
	});
	// Ouvrir une page une seule fois
	$("#wonder1").one("click", function() {
		window.open("chap_04.html");
	});
});