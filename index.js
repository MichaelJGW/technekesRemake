
var express = require('express');
var path = require("path");
var app = express();

var publicDir = path.resolve('.') + '/client';
var defaultFile = publicDir + '/index.html';

//only places the public needs to be able to see is client/compiled, client/media, client/index.html, and all html template files

var dir = path.resolve('.');
dir = {
	client : dir + '/client',
	media : dir + '/client/media',
	compiled : dir + '/client/compiled',
	clientIndex : dir + '/client/index.html'
}

var port = process.env.PORT || 5000;

app.use('/favicon.ico', express.static('/favicon.ico'));

app.set('port', port);
app.use('/', express.static(dir.clientIndex));
app.use('/media', express.static(dir.media));
app.use('/compiled', express.static(dir.compiled));
app.use(express.static('client/app/**/'));

app.get('/', function(request, response) {
  response.sendFile(defaultFile);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
