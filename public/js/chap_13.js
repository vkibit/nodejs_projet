$(document).ready(function() {
	// Mon plug-in
	var options = {
		offsetX : 30,
		offsetY : 5,
		infobullecss : "infobulle"
	};
	$("a.info").mon_infobulle(options);

	// Ajouter une ombre
	$("h1 span").dropShadow();

	// Des graphiques à partir d'un tableau
	$('table').visualize({
		type : 'pie',
		pieMargin : 10,
		title : 'Merveilles par pays'
	});

	// Trier un tableau de données
	$("table").tablesorter({
		sortList : [ [ 0, 0 ], [ 1, 0 ], [ 2, 0 ], [ 3, 0 ] ]
	});
});