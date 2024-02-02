const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    const response_message = {
        message1: "Hello World",
        message2: "This is an APi",
        message3: "Hello how are you?"
    }
    response.write(JSON.stringify(response_message));
    response.end();
  });

  server.listen(3000, () => {
    console.log("Hello, Server is running on Port 3000");
  });
