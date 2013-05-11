window.CvView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},

	render: function () {
		console.log(this.model);
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}

})