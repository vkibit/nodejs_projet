$(function() {
	// Définition des onglets
	$("#myWidget").tabs();

	// Fonction d'ajout d'un nouvel onglet
	function ajouteOnglet() {
		idNouvelOnglet = $("#myWidget>ul>li").length + 1;
		$("#myWidget ul").append('<li role="tab" tabindex="-1" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="onglet-3" aria-labelledby="ui-id-3" aria-selected="false" aria-expanded="false"><a href="#onglet-'+idNouvelOnglet+'" role="presentation" tabindex="-1" class="ui-tabs-anchor" id="ui-id-3">Onglet '+idNouvelOnglet+'</a><span class="ui-icon ui-icon-close">Suppression</span></li>');
	}
	
	// Lie la fonction ajouteOnglet au clic sur le bouton
	$("#ajouteOnglet").on("click", function() {
		ajouteOnglet();
	});
	
	// Fonction de suppression d'un onglet
	$("#myWidget").on("click", "span.ui-icon-close", function() {
		var i = $("#myWidget>ul>li").index($(this).parent());
		$("#myWidget>ul>li").eq(i).remove();
	});
});