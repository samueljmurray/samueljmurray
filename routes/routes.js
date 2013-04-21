var db = require('../database.js');

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
	var id = db.ObjectId(req.params.id);
	db.projects.findOne({"_id" : id},function(err,project){
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