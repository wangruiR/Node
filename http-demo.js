'use strict';

const http = require ('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello word\n')
}).listen(8888);
console.log('server running at localhost://8888')

