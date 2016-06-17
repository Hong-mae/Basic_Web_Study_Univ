import '../imports/api/storys';

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});

Meteor.methods({
    unImage: function() {
        var url = "http://www.splashbase.co/api/v1/images/random";

        // return url;
        var result = HTTP.get(url).data.url;
        return result;
    }
});