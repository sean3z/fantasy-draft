var express = require('express');
var app = express();
var fs = require('fs');

if (process.env.NODE_ENV === 'development') {
    app.use('/bower_components', express.static(__dirname + '/../../bower_components'));
}

app.get(/.*/, express.static(__dirname + '/../client/'));

app.listen(8080, function() {
    console.log('Web Server started on port 8080');
});