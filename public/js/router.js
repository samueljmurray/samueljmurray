var AppRouter = Backbone.Router.extend({

	routes: {
		""					: "construction",
		"home"			: "home",
		"cv"				: "cv",
		"projects"			: "allProjects",
		"projects/:id"		: "oneProject",
		"blogs"				: "allBlogs",
		"blogs/page/:page"	: "allBlogs",
		"blogs/:id"			: "oneBlog",
		"*path"				: "notFound"
	},

	initialize : function() {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.el);
	},

	home : function() {
		var homeitems = new Homeitems();
		homeitems.fetch({success:function() {
			$('#content-feed').html(new HomeView({
				model:homeitems
			}).el);
		}});
	},

	cv : function() {
		if (!this.cvView) {
			this.cvView = new CvView();
		}
		$('#content-feed').html(this.cvView.el);
	},

	allProjects : function() {
		var projectList = new ProjectCollection();
		projectList.fetch({success:function() {
			$('#content-feed').html(new ProjectListView({
				model: projectList
			}).el);
		}});
	},

	oneProject : function(id) {
		var project = new Project({_id:id});
		project.fetch({success:function() {
			$('#content-feed').html(new ProjectView({
				model:project
			}).el);
		}});
	},

	allBlogs : function() {
		var p = typeof page != 'undefined' ? parseInt(page, 10) : 1;
		var blogList = new BlogCollection();
		blogList.fetch({success: function(){
			$('#content-feed').html(new BlogListView({
				model:blogList,
				page:p
			}).el);
		}});
	},

	oneBlog : function(id) {
		var blog = new Blog({_id:id});
		blog.fetch({success: function() {
			$('#content-feed').html(new BlogView({
				model:blog
			}).el);
		}});
	},

	notFound: function() {
		if (!this.notFoundView) {
			this.notFoundView = new NotFoundView();
		}
		$("#content-feed").html(this.notFoundView.el);
	},

	construction : function() {
		if (!this.constructionView) {
			this.constructionView = new ConstructionView();
		}
		$('#content-feed').html(this.constructionView.el);
	},

});

utils.loadTemplate(['HeaderView', 'HomeView', 'CvView', 'ProjectListView', 'ProjectView', 'BlogListView', 'BlogView', 'NotFoundView', 'ConstructionView'], function() {
	router = new AppRouter();
	Backbone.history.start();
});