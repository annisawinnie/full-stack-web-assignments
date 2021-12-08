const http = require("http");
const url = require("url");

const requestListener = (request, response) => {
  console.log("request listener emitted");
  const parsedURL = url.parse(request.url, true);

  switch (request.url.path) {
    case "/about": {
      message = "Welcome to about us page";
      break;
    }
    case "/contact": {
      message = "Welcome to contact us page";
      break;
    }
    default:
      message = "Hello world";
  }
};

console.log(parsedURL);
const queryParams = parsedURL.query;
console.log(queryParams);

response.writeHead(200, {
  "Content-Type": "text/html",
});

response.write(message);
response.end(); // harus!!!
const server = http.createServer(requestListener);

// event listener / event handler / callbacks.
server.on("listening", (...argv) => {
  console.log("server is listening on port 8000");
  console.log("listening event emitted with argv", argv);
});

server.on("close", () => {
  console.log("server is closed");
  // kirim email server lagi down.
});

server.on("error", (err) => {
  console.log("server is error");
  console.error(err);
});

server.listen(8000); // menjalankan server
