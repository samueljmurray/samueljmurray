window.ProjectListView = Backbone.View.extend({

	initialize: function() {

		this.render();

	},

	render: function() {

		var projects = this.model.models;

		if (typeof projects == 'undefined') { // If there are projects in the database
			$(this.el).append("No projects.");
		} else {
			var len = projects.length;
			var del_ctr = 0;
			for (var i = 0; i < len; i++) {
				if (projects[i].deleted = true) {
					del_ctr = del_ctr + 1;
				}
			}
			if (len != del_ctr) { // If not all projects have been deleted
				for (var i = 0; i < len; i++) {
					$(this.el).html('<ul class="projectslist"/>');
					$('.projectslist', this.el).append(new ProjectListViewItem({model: projects[i]}).render().el);
				}
			} else {
				$(this.el).append("No projects.");
			}
		}

		return this;

	}

});

window.ProjectListViewItem = Backbone.View.extend({

	tagName: "li",

	initialize: function() {

		this.render();

	},

	render: function() {

		$(this.el).html(this.template(this.model.toJSON()));
		return this;

	}

});