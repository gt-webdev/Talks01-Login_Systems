import express from 'express';
import path from 'path';

export default function startServer() {
	const port = 3000

	const server = express();
	/*const jwt = require('express-jwt');
	const jwtCheck = jwt({
	  secret: new Buffer('NyZslmktWfh_etsDfQGs0rYw-Rf41R5-obYDZjGHlOblqPLjxS5L0-yGiB_6fTDz', 'base64'),
	  audience: 'a2fICjgon77eKU58wBrqLv3A99rFgKuI'
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
