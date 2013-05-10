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
      "click .project-scroll-back"    : "projectScrollBack",
      "click .project-scroll-forward" : "projectScrollForward",
  },

  projectScrollBack : function() {
    if (typeof window.projectpos == "undefined") {
      window.projectpos = 0;
    }
  	if (window.projectspos != 0) {
      if (window.projectpos == 3) {
        $('.project-scroll-forward').css('opacity','1');
      }
  		window.projectpos -= 1;
  		$("#projects-splash-wrapper").animate({left: '-' + window.projectpos + '00%'},500);
      if (window.projectpos == 0) {
        $('.project-scroll-back').css('opacity','0.4');
      }
  	}
  },

  projectScrollForward : function(e) {
    if (typeof window.projectpos == "undefined") {
      window.projectpos = 0;
    }
  	if (window.projectpos != 3) {
      if (window.projectpos == 0) {
        $('.project-scroll-back').css('opacity','1');
      }
  		window.projectpos += 1;
  		$("#projects-splash-wrapper").animate({left: '-' + window.projectpos + '00%'},500);
      if (window.projectpos == 3) {
        $('.project-scroll-forward').css('opacity','0.4');
      }
  	}
  },

})