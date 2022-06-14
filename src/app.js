const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config/config');

//settings
const port = config.Port || 3000;
app.set('port', port);

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//import routes
const routes = require('./config/config.routes');

//routes
routes.forEach(route => {
	app.use(route.name, route.endpoints);
});

module.exports = app;