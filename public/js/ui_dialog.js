$(document).ready(function() {
	$("#myWidget").dialog({
		autoOpen : true,
		show : "blind",
		hide : "explode",
		width : 600,
		modal : true,
		buttons : {
			"OK" : function() {
				$(this).dialog("close");
			},
			"Annuler" : function() {
				$(this).dialog("close");
			}
		}
	});
});

//$("#btnOuvrir").click(function() {
//	$("#myWidget").dialog("open");
//});