var http = require('http');
var fs = require('fs');

//TODO.. copy openpgpjs to js folder..

http.createServer(function (req, res) {

    var resp;
    if(req.url === '/'){
       resp = fs.readFileSync('index.html');
    }
    if(req.url === '/js/openpgp.min.js'){
        resp = fs.readFileSync('node_modules/openpgp/dist/openpgp.js');
    }
    else {
        try {
            resp = fs.readFileSync(req.url.slice(1));
        }
        catch (ex) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end();            
        }
    }

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(resp);

}).listen(3000, function(){
    console.log('PGP UI running on http://localhost:3000');
});