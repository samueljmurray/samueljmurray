window.BlogView = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},

	render: function () {
		var blog = this.model.models;
		
		if (typeof blog == 'undefined') {
			$(this.el).html("Blog not found.");
		} else {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	}

})