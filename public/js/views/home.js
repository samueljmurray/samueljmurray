window.HomeView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},

	render: function () {
		var homeitems = this.model.models;
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}

})