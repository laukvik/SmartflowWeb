var express = require("express");
var application_root = __dirname;

const port = process.env.PORT || 8080;
var app = express();
app.use(express.static(application_root));
app.listen(port, () => console.log('Smartflow-Web listening on port %d in %s mode from ', port, app.settings.env, application_root));