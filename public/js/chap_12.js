$(document).ready(function() {
	$("#tous").click(function() {
		var checked_status = this.checked;
		$("input[name^=case]").each(function() {
			this.checked = checked_status;
		});
	});
});