window.CvView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
		this.documentready();
	},

	render: function () {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	},

	documentready : function() {
		$(window).scrollTop(0);
	},

})