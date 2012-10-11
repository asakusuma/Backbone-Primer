var BaseController = Backbone.View.extend({
	remove: function() {
		this.undelegateEvents();
		this.unbind();

		//Remove child views
		if(this.views) {
			_.each(this.views, function(view) { view.remove(); });
		}

		//Remove child view controllers
		if(this.viewControllers && _.isObject(this.viewControllers)) {
			if(!_.isArray(this.viewControllers)) {
				this.viewControllers = _.values(this.viewControllers);
			}
			_.each(this.viewControllers, function(viewController) { viewController.remove(); });
		}

		//Remove child view 
		if(this.view) {
			this.view.remove();
		}
	}
});