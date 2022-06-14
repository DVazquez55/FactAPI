const app = require('./app');

//starting the server
app.listen(app.get('port'), function(){
	console.log(`Server running...`);
});