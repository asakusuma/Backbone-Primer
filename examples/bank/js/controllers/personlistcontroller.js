var PersonListController = BaseController.extend({
	initialize: function(args) {
		_.bindAll(this, "buildView", "addPerson");
		this.viewControllers = new PersonControllerCollection();
		this.buildView();
		this.tableEl = $(this.el).children(".table");
	},
	buildView: function() {
		this.view = new PersonListView({
			el: this.el
		});
		this.view.bind("personAdded",this.addPerson);
	},
	addPerson: function(name,title,age) {
		var personEl = $(templates.personList.person);
		$(this.tableEl).append(personEl);
		this.viewControllers.push(new PersonController({
			el: $(personEl),
			model: new Person({
				name: name,
				title: title,
				age: age
			})
		}));
	}
});