module.exports = function (app) {
	app.get('/', function (req, resp) {
		//resp.send('<html><body>Portal de noticias</body></html>')
		resp.render('home/index')
	})
}
