$(document).ready(function() {
	$("#lieu").autocomplete("http://ws.geonames.org/searchJSON", {
		dataType: "jsonp",
		parse: function(data) {
			var tableau = new Array();
			var donnees = data.geonames;
			for(var i=0; i<donnees.length; i++){
				tableau[i] = { data:donnees[i], value:donnees[i].name, result:donnees[i].name };
			}
			return tableau;
		},
		formatItem: function(ligne) {
			return ligne.name + ", " + ligne.adminName2 + " (" + ligne.adminCode2 + ")";
		},
		extraParams: {
			q: "",
			limit: "",
			country: "FR",
			featureClass: "P",
			style: "full",
			maxRows: 50,
			name_startsWith: function () { return $("#lieu").val() }
		},
		max: 50
	}); 
});