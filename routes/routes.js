var db = require('../database.js');

// --- HOMEITEMS ---

exports.homeitems = function(req, res) {
	var rtn_json = {
		cv : {},
		projects : {},
		blog : {}
	};
	db.cv.find(function(err, cv) {
		if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
			if (err) {
				rtn_json.cv = {"ERROR" : err};
			} else {
				rtn_json.cv = cv;
				db.projects.find().sort({$natural:-1}).limit(4, function(err, projects) {
					if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
						if (err) {
							rtn_json.projects = {"ERROR" : err};
						} else {
							rtn_json.projects = projects;
							db.blogs.find().sort({$natural:-1}).limit(1, function(err, blog) {
								if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
									if (err) {
										rtn_json.blog = {"ERROR" : err};
									} else {
										rtn_json.blog = blog;
										res.json(rtn_json);
									}
								}
							});
						}
					}
				});
			}
		}
	});
};

// --- CV ---

exports.cv = function(req, res){
	db.cv.find(function(err, cv){
		if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
			if (err) {
				res.json({"ERROR" : err});
			} else {
				res.json(cv);
			}
		}
	});
};

// --- PROJECTS ---

exports.allProjects = function(req, res){
	db.projects.find(function(err, projects){
		if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
			if (err) {
				res.json({"ERROR" : err});
			} else {
				res.json(projects);
			}
		}
	});
};

exports.oneProject = function(req, res){
	db.projects.findOne({"permalink" : req.params.permalink},function(err,project){
		if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
			if (err) {
				res.json({"ERROR" : err});
			} else {
				res.json(project);
			}
		}
	});
};

// --- BLOGS ---

exports.allBlogs = function(req, res){
	db.blogs.find(function(err,blogs){
		if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
			if (err) {
				res.json({"ERROR" : err});
			} else {
				res.json(blogs);
			}
		}
	});
};

exports.oneBlog = function(req, res){
	var id = db.ObjectId(req.params.id);
	db.blogs.findOne({"_id" : id},function(err,blog){
		if ((req.headers.host == 'localhost:3000') || (req.headers.host == 'samueljmurray.herokuapp.com')) {
			if (err) {
				res.json({"ERROR" : err});
			} else {
				res.json(blog);
			}
		}
	});
};