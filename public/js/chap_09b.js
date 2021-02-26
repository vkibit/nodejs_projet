$(document).ready(function() {
	$("#pays").change(function() {
		var selection = $("#pays").val();
		if (selection == "tous") {
			// show all items
			$("li").filter(".item").show();
		} else {
			$("li").filter(".item").hide();
			$("li").filter("." + selection).show();
		}
	});
});