$(document).ready(function() {
	// Taille du texte
	$('input').click(function() {
		var texte = $('p');
		var taille = texte.css('fontSize');
		var nombre = parseFloat(taille);
		if (this.id == 'plus') {
			nombre *= 1.4;
		} else if (this.id == 'moins') {
			nombre /= 1.1;
		}
		texte.css('fontSize', nombre);
	});
});