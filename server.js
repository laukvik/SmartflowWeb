const express = require("express");
const path = require("path");
const port = process.env.PORT || 80;
const app = express();
const application_root = path.join(__dirname, 'dist');
app.use(express.static(application_root));
app.listen(port, () => console.log('Smartflow-Web listening on port %d in %s mode from ', port, app.settings.env, application_root));