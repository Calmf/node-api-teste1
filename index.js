const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const serverPort = 3000;

app.get('/', (req, res) =>
{
	res.send('Hello World!');
});

const server = app.listen(serverPort, () =>
{
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server started on http://%s:%s", host, port);
})