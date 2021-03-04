const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const multer  = require('multer');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const serverPort = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));

app.get('/', (req, res) =>
{
	res.send('Hello World!');
});

app.get('/index.html', function (req, res)
{
   res.sendFile( __dirname + "/app/view/" + "index.html" );
})

app.get('/upload', function (req, res)
{
   res.sendFile( __dirname + "/app/view/" + "upload.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.post('/file_upload', (req, res) =>
{
	//res.send(JSON.stringify(req));
	console.log(req.body);
	res.send("test");
	/*
	console.log(req.files.file.name);
	console.log(req.files.file.path);
	console.log(req.files.file.type);
	var file = __dirname + "/" + req.files.file.name;

	fs.readFile( req.files.file.path, function (err, data) {
	  fs.writeFile(file, data, function (err) {
	     if( err ) {
	        console.log( err );
	        } else {
	           response = {
	              message:'File uploaded successfully',
	              filename:req.files.file.name
	           };
	        }
	     
	     console.log( response );
	     res.end( JSON.stringify( response ) );
	  });
	});
	*/
});

const server = app.listen(serverPort, () =>
{
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server started on http://%s:%s", host, port);
});