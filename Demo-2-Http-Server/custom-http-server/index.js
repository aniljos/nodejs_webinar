const http = require('http');


const server = http.createServer();

server.on("request", (req, resp) => {
    console.log(`Received the request...${req.url}`);
    resp.writeHead(200, {"Content-Type": "text/html"});

    if (req.url === "/hello") {
        
        resp.write("<h2>Nodejs Http Server</h2><h4>Hello, welcome to the server!</h4>");

    } else if (req.url === "/about") {

        resp.write("<h2>Nodejs Http Server</h2><p>This is a simple server created using Node.js</p>");

    } else {
        resp.write(`<h2>Nodejs Http Server</h2><p>You have reached the page ${req.url}</p>`);
    }

    resp.end();
});

const portNo = 7000;
server.listen(portNo, () => {
    console.log(`Server started at port no ${portNo}...`);
});