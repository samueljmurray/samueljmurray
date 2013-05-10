window.ProjectView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},

	render: function () {
		var project = this.model;
		if (typeof project == 'undefined') {
			$(this.el).html("<div class=\"container\"><div class=\"row\"><div class=\"span12\"><h1 class=\"center\">Project not found.</h1></div></div></div>");
		} else {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	}

})