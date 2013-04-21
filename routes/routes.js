var db = require('../database.js');

exports.index = function(req, res){
	res.send("Index");
}

exports.cv = function(req, res){
	db.cv.find(function(err, cv){
		if (err) {
			res.json({"ERROR" : err});
		} else {
			res.json(cv);
		}
	});
};

exports.allProjects = function(req, res){
	db.projects.find(function(err, projects){
		if (err) {
			res.json({"ERROR" : err});
		} else {
			res.json(projects);
		}
	});
};

exports.oneProject = function(req, res){
	var id = db.ObjectId(req.params.id);
	db.projects.findOne({"_id" : id},function(err,project){
		if (err) {
			res.json({"ERROR" : err});
		} else {
			res.json(project);
		}
	});
};