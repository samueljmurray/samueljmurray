window.Project = Backbone.Model.extend({

	urlRoot : "dbget_projects",

	initialize: function() {
		console.log(this.id);
	}

});

window.ProjectCollection = Backbone.Collection.extend({

	model: Project,

	url: "dbget_projects"

});