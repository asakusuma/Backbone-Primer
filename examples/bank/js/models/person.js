var personStaticProperties = {
	fields: {
		"name": {
			"name": "name",
			"label": "Name",
		},
		"title": {
			"name": "title",
			"label": "Title",
		},
		"age": {
			"name": "age",
			"label": "Age",
		}
	}
};

var Person = BaseModel.extend({
 	initialize: function() {

 	},
 	proto: personStaticProperties
});

_.extend(Person, personStaticProperties);