window.ProjectView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},

	render: function () {
		var project = this.model.models;

		if (typeof project == 'undefined') {
			$(this.el).html("Project not found.");
		} else {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	}

})