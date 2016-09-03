import express from 'express';
import path from 'path';

export default function startServer() {
	const port = 3000

	const server = express();
	/*const jwt = require('express-jwt');
	const jwtCheck = jwt({
	  secret: new Buffer('CLIENT_SECRET', 'base64'),
	  audience: 'CLIENT_ID'
	});*/

  server.get('/', (req, res) => {
    res.redirect('/index.html')
  });

	/**
	This is the route with the code to check Auth Info
	**/

	// server.use('/authInfo', jwtCheck);
	server.get('/authInfo', (req, res) => {
		res.send('It\s all good!');
	});
  server.use('/', express.static(path.join(__dirname, '/dist/')));

  server.listen(port, () => {
    console.log("Http server is listening on port " + port);
  });
}
