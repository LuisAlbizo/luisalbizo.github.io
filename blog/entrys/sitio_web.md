## Nuevo Sitio Web

Este sitio esta hecho con la ayuda de vue.js [readme]()  _algo_ **mas**.

Utilizacion de flask:
	
	import flask
	
	app = flask.Flask(__name__)
	
	@app.route('/')
	def index():
		return flask.render_template('index.html', {'var1': 'Value', 'list': []})
	
	if __name__=='__main__':
		app.run(host='127.0.0.1', port=8080, debug=True)


