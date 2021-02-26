$(document).ready(
		function() {
			$('#bouton').click(function() {
				$('#contenu').hide().load('files/byzance.txt', function() {
					$(this).fadeIn(2000);
				});
				return false;
			});
			$('<div id="loading"><img src="pics/ajax-loader.gif" /></div>')
					.insertBefore('#contenu').ajaxStart(function() {
						$(this).show();
					}).ajaxStop(function() {
						$(this).hide();
					});
		});