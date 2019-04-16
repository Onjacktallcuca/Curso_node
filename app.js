//server
var app = require('./config/server');

//routes
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app);

//launch
app.listen(3000, function () {
	console.log('server run with express...');
})