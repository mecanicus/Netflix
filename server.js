var express = require('express');

const path = require('path')
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

//enables cors
//app.use(cors());
//app.options('*', cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 8080, function(){
    console.log('Your node js server is running');
});