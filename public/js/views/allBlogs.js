window.BlogListView = Backbone.View.extend({

	initialize: function() {

		this.render();

	},

	render: function() {

		var blogs = this.model.models;
		var p = this.page;

		if (typeof blogs == 'undefined') { // If there are blogs in the database
			$(this.el).append("No blogs.");
		} else {
			var len = blogs.length;
			var del_ctr = 0;
			for (var i = 0; i < len; i++) {
				if (blogs[i].deleted = true) {
					del_ctr = del_ctr + 1;
				}
			}
			if (len != del_ctr) { // If not all blogs have been deleted
				var s = p - 10;
				var e = p > len ? len : p;
				for (var i = s; i < e; i++) {
					$(this.el).html('<ul class="blogslist"/>');
					$('.blogslist', this.el).append(new BlogListViewItem({model: blogs[i]}).render().el);
				}
			} else {
				$(this.el).append("No blogs.");
			}
		}

		return this;

	}

});

window.BlogListViewItem = Backbone.View.extend({

	tagName: "li",

	initialize: function() {

		this.render();

	},

	render: function() {

		$(this.el).html(this.template(this.model.toJSON()));
		return this;

	}

});