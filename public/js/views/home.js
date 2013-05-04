window.HomeView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},

	render: function () {
		var homeitems = this.model.models;
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},

	events: {
      "click .project-scroll-back"   : "projectScrollBack",
      "click .project-scroll-forward" : "projectScrollForward"
  },

  projectScrollBack : function() {
  	if (!window.projectspos) {
  		window.projectspos = 0;
  	}
  	if (window.projectspos != 0) {
  		window.projectspos -= 1;
  		$("#projects-splash-wrapper").animate({left: '-' + window.projectspos + '00%'},500);
  	}
  },

  projectScrollForward : function() {
  	if (!window.projectspos) {
  		window.projectspos = 0;
  	}
  	if (window.projectspos != 3) {
  		window.projectspos += 1;
  		$("#projects-splash-wrapper").animate({left: '-' + window.projectspos + '00%'},500);
  	}
  }

})