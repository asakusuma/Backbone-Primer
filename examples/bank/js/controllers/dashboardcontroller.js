var DashboardController = BaseController.extend({
	initialize: function(args) {
		_.bindAll(this, "buildView");
		this.model = new Dashboard({
			"totalAge": 0
		});
		this.buildView();
	},
	buildView: function() {
		this.view = new DashboardView({
			el: this.el,
			controller: this,
			templates: templates.dashboard
		});
	}
});