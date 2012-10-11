var dashboardStaticProperties = {
	fields: {
		"totalAge": {
			"name": "totalAge",
			"label": "Total Age",
			"readOnly": true
		},
		"sortBy": {
			"name": "sortBy",
			"label": "Sort By",
			"options": [
				"Name",
				"Title",
				"Age"
			]
		}
	}
};

var Dashboard = BaseModel.extend({
 	initialize: function() {

 	},
 	proto: dashboardStaticProperties
});

_.extend(Dashboard, dashboardStaticProperties);