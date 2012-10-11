var PersonController = BaseController.extend({
	initialize: function(args) {
		_.bindAll(this, "buildView");
		this.buildView();
	},
	buildView: function() {
		this.view = new PersonView({
			el: $(this.el),
			templates: templates.person,
			controller: this
		});
	},
});