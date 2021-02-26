$(function() {
	$.datepicker.setDefaults($.datepicker.regional["fr"]);
	$("#myWidget").datepicker({
		minDate : new Date(2012, 1, 1),
		maxDate : "+24m",
		numberOfMonths : 3
	});
});
