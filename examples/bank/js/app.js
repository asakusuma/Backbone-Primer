var DashboardView = Backbone.View.extend({
 	initialize: function(args) {
 		//Copy properties from 'args' to properties of 'this'
    	_.extend(this,args);

    	//Pre-define our jQuery selectors for entire view
    	this.totalMoneyEl = $("#total-money");
    	this.render();
 	},
 	render: function() {
 		this.totalMoneyEl.html("$"+this.total);
 	},
 	updateTotalMoney: function(money) {
 		this.total = money;
 		this.render();
 	}
});

var PeopleView = Backbone.View.extend({
	//Map events to functions
	events: {
		"change input":"moneyChanged"
	},
 	initialize: function(args) {
 		_.extend(this,args);
 		//Set the 'this' context for the 'moneyChanged' function
 		_.bindAll(this, "moneyChanged");
 		this.render();
 	},
 	render: function() {
 		$(this.el).html("");
 		for(var i = 0; i < this.data.length; i++) {
    		this.addPerson(this.data[i]);
    	}
 	},
 	addPerson: function(obj) {
 		var personEl = $(PeopleView.template(obj));
 		$(this.el).append(personEl);
 	},
 	refreshData: function(data,name) {
 		this.data = data;
 		this.render();
 		if(name) {
 			$("[data-name="+name+"]").focus();
 		}
 	},
 	moneyChanged: function(event) {
 		var amount = parseInt($(event.currentTarget).val().replace("$",""));
 		if(isNaN(amount)) {
 			amount = 0;
 		}

 		//Triger an event for the controller
 		this.trigger("moneyChanged", {
 			name: $(event.currentTarget).attr("data-name"),
 			money: amount
 		});
 	}
});
//Attach template as static variable
PeopleView.template = _.template($("#_person").html());

//Application Controller
var App = Backbone.View.extend({
 	initialize: function() {
 		_.bindAll(this,"updatePerson");
 		this.views = {};
 		this.views.people = new PeopleView({
 			el: $("#people"),
 			data: this.collection.toJSON()
 		});
 		this.views.people.bind("moneyChanged",this.updatePerson);

 		this.views.dashboard = new DashboardView({
 			el: $("#dashboard"),
 			total: this.getTotalMoney()
 		});
 	},
 	getTotalMoney: function() {
 		var total = 0;
 		for(var i = 0; i < this.collection.length; i++) {
    		total += this.collection.at(i).get("money");
    	}
    	return total;
 	},
 	updatePerson: function(event) {
 		this.collection.where({ name: event.name })[0].set('money',event.money);
 		this.collection.sort();
 		this.views.people.refreshData(this.collection.toJSON(), event.name);
 		this.views.dashboard.updateTotalMoney(this.getTotalMoney())
 	}
});

var people = new Backbone.Collection(data);
//Ensure that the collection gets sorted by money
people.comparator = function(person) {
 	return parseInt(person.get("money"))*-1;
};

$(document).ready(function() {
 	var app = new App({
    	el:"html",
    	collection: people
 	});
});