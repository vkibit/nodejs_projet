$(document).ready(function() {
	$('a').click(function() {
		$('#pays').hide().load('files/' + this.id + '.html'
			//, function() {
			//$(this).slideDown(100);}
			);
		//return true;
	});
});