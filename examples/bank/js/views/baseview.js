var BaseView = Backbone.View.extend({
	initialize: function(args) {
		_.bindAll(this, "renderModel", "bindFields");
		this.hasBoundModel = false;
		if(args.templates) {
			this.templates = args.templates;
		}
		if(!this.templates) {
			this.templates = templates;
		}
		if(args.controller) {
			this.controller = args.controller;
		}
		if(this.controller && this.controller.model) {
			this.model = this.controller.model;
		}
		if(this.model && this.model.proto && this.model.proto.fields) {
			this.hasBoundModel = true;
		}
		this.render();
	},
	render: function() {
		$(this.el).html(_.template(this.templates.base, {
			content: this.renderModel()
		}));
		this.bindFields();
	},
	remove: function() {
		this.undelegateEvents();
		this.unbind();
		Backbone.View.prototype.remove.call(this);
	},
	renderModel: function() {
		var html = "",
			template,
			variables,
			formTemplates;
		if(this.templates.form) {
			formTemplates = this.templates.form;
		} else {
			formTemplates = templates.form;
		}
		if(this.hasBoundModel) {
			for(var name in this.model.proto.fields) {
				variables = {
					name: name,
					label: this.model.proto.fields[name].label
				}
				if(this.model.get(name)) {
					variables.value = this.model.get(name);
				}
				if(this.model.proto.fields[name].options) {
					template = formTemplates.select;
					variables.options = this.model.proto.fields[name].options;
				} else if(this.model.proto.fields[name].readonly) {
					template = formTemplates.tuple;
				} else {
					template = formTemplates.textbox;
				}
				html += _.template(template, variables);
			}
		}
		return html;
	},
	bindFields: function() {
		if(this.hasBoundModel) {
			for(var name in this.model.proto.fields) {
				if(this.model.proto.fields[name].readonly) {
					//$(this.el).find("[name="+name+"]");
				} else {
					//template = formTemplates.textbox;
				}
			}
		}
	}
});