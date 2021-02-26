$(document).ready(function() {
	$("a").filter(function() {
		return this.hostname !== location.hostname;
	}).after('<img src="pics/external.png" class="external">');
});