module.exports = {

blubb: function() {
  alert("Edbformat is up and running!");
},

bla: {
	"schema": {
		"name_de": {
			"type": "string",
			"title": "Name Deutsch",
			"required": true
		},
		"specification": {
			"type": "string",
			"title": "Spezifikation"
		},
		"synonyms": {
			"type": "string",
			"title": "Synonyme"
		},
		"name_en": {
			"type": "string",
			"title": "Name Englisch"
		},
		"name_fr": {
			"type": "string",
			"title": "Name Franz."
		},
		"kg_co2_eq_per_kg": {
			"type": "number",
			"title": "kg CO2-Aeq./kg"
		},
		"id": {
			"type": "string",
			"title": "ID"
		},
		"tags": {
			"type": "string",
			"title": "Tags",
			"required": true
		},
		"isCombinedProduct": {
			"type": "boolean",
			"title": "Kombiniertes Produkt"
		},
		"production": {
			"type": "string",
			"title": "Herstellung",
			"enum": ["konventionell",
			"GH",
			"Bio"]
		},
		"background_info": {
			"type": "string",
			"title": "Background Info"
		},
		"co2_calculation": {
			"type": "textarea",
			"title": "CO2 Berechnung"
		}
	},
	"value": null,
	"onSubmitValid": function(values){
		this.updateFile();
	}
}

};