const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
 

const hostname = '127.0.0.1';
const port = 3000;
const webServer =(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hola Node.js<h1>');
  }

const server = http.createServer(webServer);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
 