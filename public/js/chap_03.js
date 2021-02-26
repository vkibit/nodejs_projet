$(document).ready(function() {
	// Changement du fond au survol
	$("p").mouseover(function() {
		$(this).addClass("fond");
	});
	$("p").mouseout(function() {
		$(this).removeClass("fond");
	});
	// Oter l'alignement à droite du titre
	$("h2").removeAttr("align");
	// Centrer le texte dans les paragraphes
	$("p").attr("align", "center");
});