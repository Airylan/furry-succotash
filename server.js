'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

app.get('/*', function (req, res) {
    console.log(path.join(__dirname, 'index.html'));
    res.sendFile(path.join(__dirname, 'index.html'), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});