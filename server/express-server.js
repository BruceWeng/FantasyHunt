var express = require('express');
var app = express();

app.use('/', express.static('./public'));

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server is running...')
});
