
'use strict';

var fs = require('fs');
var express = require('express');
var app = express();


app.get('/api/whoami', function (req, res) {
  
  var ip = req.header('x-forwarded-for').split(',')[0];  
  var lang = req.header('accept-language').split(',')[0];  
  var sw = req.header('user-agent').match(/\(([^)]+)\)/)[1];
  var result = { "ipaddress" : ip, "language" : lang, "software": sw };
  res.json(result)
})



app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

