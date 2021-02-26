$(document).ready(function() {
	var boites_page = $('div.menu > div');
	boites_page.hide().filter(':first').show();
	$('div.menu ul.navigation a').click(function() {
		boites_page.hide();
		boites_page.filter(this.hash).show();
		$('div.menu ul.navigation a').removeClass('selected');
		$(this).addClass('selected');
		return false;
	});
});