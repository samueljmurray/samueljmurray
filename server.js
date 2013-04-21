var express = require('express'),
	routes = require('./routes/routes.js'),
	http = require('http'),
	path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('elephant cookies potato !46 salad'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/dbget_cv', routes.cv);
app.get('/dbget_projects', routes.allProjects);
app.get('/dbget_projects/:id', routes.oneProject);
app.get('/dbget_blogs', routes.allProjects);
app.get('/dbget_blogs/:id', routes.oneProject);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
