var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

// set port
app.set('port', (process.env.PORT || 3000));

// set static path
app.use(express.static(path.join(__dirname, "www")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/authenticate', function(req, res) {
  // config options for POST request
  var options = {
    uri: 'http://t001-005-001-02a.elasticbeanstalk.com/api',
    method: 'POST',
    json: req.body
  };

  // submit POST request with user credentials to sipree authentication server
  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
    else{
      res.send(error);
    }
  });
});

// start server
app.listen(app.get('port'), function(){
  console.log("Server running on port " + app.get("port") + "...");
});