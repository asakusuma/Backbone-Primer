var PersonListView = BaseView.extend({
	events: {
		"click button": "onAddPersonBtnClicked"
	},
	initialize: function(args) {
		this.render();
	},
	render: function() {
		$(this.el).html(templates.personList.base);
	},
	onAddPersonBtnClicked: function() {
		this.trigger("personAdded",$(this.el).find("[name=add-name]").val(), $(this.el).find("[name=add-title]").val(), $(this.el).find("[name=add-age]").val());
		$(this.el).find("#add-person-widget").find("input").val("");
	}
});