// server.js
// where your node app starts
const analysis = require('./cool-file')
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

// app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/api/analysefile', upload.single('file'), (req, res) => {
  analysis(req, res)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
