var mongoUrl = "mongodb://heroku_app15135290:p6pqtregul6bug6dcugflmal36@ds029277.mongolab.com:29277/heroku_app15135290";
var collections = ["cv","projects"];

var db = require("mongojs").connect(mongoUrl, collections);

module.exports = db;