const http = require("http");
const url = require("url");

const port = 8000;

const server = http.createServer((request, response) => {
  console.log("OK");

  // const queryParams = url.parse(request.url, true).query;
  let message = "";

  const parsedURL = url.parse(request.url, true);
  switch (parsedURL.path) {
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

  response.writeHead(200, {
    "Content-Type": "text/html",
  });

  response.write(message);
  response.end();
});

server.on("listening", () => {
  console.log(`Server is listening on port ${port}`);
});

server.on("close", () => {
  console.log("Server is closed");
});

server.listen(port);
