//console.log('Criando um site de noticias com node js');

var http = require('http');
var server = http.createServer(function (req, resp) {
	// body...
	resp.end('<html><body>URL: ' + req.url + '</body><html/>');
})

server.listen(3000);