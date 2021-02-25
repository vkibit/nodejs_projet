$(document).ready(function() {
	// Changement du titre du CV
	$("#titreCV").html("Aventuri&egrave;re et arch&eacute;ologue");
	// Changement de la date de naissance en âge
	var sBirth = $("#divAge").text();
	var sDay = sBirth.substring(0, 2);
	var sMonth = sBirth.substring(3, 5);
	var sYear = sBirth.substring(6, 10);
	var dNow = new Date();
	var dBirth = new Date(parseInt(sYear), parseInt(sMonth), parseInt(sDay));
	var iAge = dNow.getFullYear() - dBirth.getFullYear();
	$("#divAge").text(iAge + " ans");
	// Mise en forme des titres de section
	$(".titreSection").css("background-color", "gold");
	// Mise en forme des dates du CV
	$(".dateCV").css("font-weight", "bold");
});