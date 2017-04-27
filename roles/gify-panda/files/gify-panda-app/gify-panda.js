/*

 Name:   gify-panada
 Author: Avraham Kalvo
 Date:   25/4/2017

 The following program utilizes the "Express" nodejs framework in order to service static files from a directory
 setup under "resources_path" in it config.json file accessed via http://localhost:<PORT>/<STATIC_FILE_NAME>

 */

var config = require('./config.json');
var express = require('express');
var app = express();
try {
    console.log("Listening For Static Files Server Requests on: http://localhost:%s", config.port);
    app.use(express.static(config.resources_path));
    app.listen(config.port);
} catch(err) {
    console.log(err);
}