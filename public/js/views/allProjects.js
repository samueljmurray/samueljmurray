window.ProjectListView = Backbone.View.extend({

	initialize: function() {

		this.render();
		this.documentready();

	},

	render: function() {

		$(this.el).html(this.template());
		var projects = this.model.models;
		var len = Object.keys(projects).length;
		if ((len == 0) || (typeof projects == 'undefined')) { // If there are projects in the database
			$(this.el).html("<div class=\"container\"><div class=\"row\"><div class=\"span12\"><h1 class=\"center\">No projects.</h1></div></div></div>");
		} else {
			var del_ctr = 0;
			for (var i = 0; i < len; i++) {
				if (projects[i].deleted) {
					del_ctr = del_ctr + 1;
				}
			}
			if (len != del_ctr) { // If not all projects have been deleted
				for (var i = 0; i < len; i++) {
					$('.projectslist', this.el).append(new ProjectListViewItem({model: projects[i]}).render().el);
				}
			} else {
				$(this.el).append("No projects.");
			}
		}
		return this;
	},

	documentready : function() {
		$(window).scrollTop(0);
	},

});

window.ProjectListViewItem = Backbone.View.extend({

	tagName: "li",

	className: "span4",

	initialize: function() {

		this.render();

	},

	render: function() {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;

	}

});