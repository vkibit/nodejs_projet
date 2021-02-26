$(document).ready(function() {
	$('<a id="top" name="top"></a>').prependTo('body');
	$("p").after("<a href='#top'>Haut de page</a>");
	$("#contenu").after("<div id='foot'><i>Notes de pied de page</i></div>");
});