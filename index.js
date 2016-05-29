var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);

}).listen(3000, function(){
    console.log('PGP UI running on http://localhost:3000');
});