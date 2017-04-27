var config = require('./config.json');
var express = require('express');
var app = express();
app.use(express.static('/tmp/gify-panda/resources'));
app.listen(config.port);