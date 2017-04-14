const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer();

server.on('request', dispatch);


function dispatch(req, res) {
  // Doing this means you are forced to end the socket yourself
  req.socket.setTimeout(0);

  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-cache');
  res.setHeader('content-length', '38');
  res.setHeader('vary', 'accept-encoding');
  res.writeHead(404);
  res.write('{"statusCode":404,"error":"Not Found"');
  req.socket.end();
  res.write('}');
  res.end();
}

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

