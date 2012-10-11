var PersonControllerCollection = Backbone.Collection.extend({
	initialize: function() {
		this.sortByField = 'Name';
	},
	comparator: function(personController) {
		return personController.get('model').get(this.sortByField);
	}
});