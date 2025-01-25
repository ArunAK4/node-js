const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((request, response) => {
  const logStartTime = Date.now();
  const url = request.url;
  const method = request.method;

  // Routes
  if (url == "/" && method == "GET") {
    readFileAndResponse(response, "./static/welcome.html");
  } else if (url == "/todo" && method == "GET") {
    readFileAndResponse(response, "./static/todo.html");
  } else if (url == "/submit" && method == "POST") {
    parseBody(request);
    response.writeHead(302, "Found", { Location: "/todo" });
    response.end();
  } else if (url == "/api/todos" && method == "GET") {
    sendJSONResponse(response, "./data.json");
  } else {
    // 404 Path
    response.writeHead(404, "Not Found");
    response.end("404 - Page Not Found");
  }

  // Logging
  response.on("finish", () => {
    const elapsedTime = Date.now() - logStartTime;
    if (response.statusCode === 404) {
      console.log(
        `404 - ${request.method} ${request.url} - Completed in ${elapsedTime} ms`
      );
    } else {
      console.log(
        `${response.statusCode} - ${request.method} ${request.url} - Completed in ${elapsedTime} ms`
      );
    }
  });
});

// Render File for each route
function readFileAndResponse(response, filePath) {
  const resolvedPath = path.resolve(filePath);

  fs.readFile(resolvedPath, (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      response.writeHead(404, "Not Found", { "Content-Type": "text/plain" });
      response.end("404 - File Not Found");
    } else {
      response.writeHead(200, "Success", { "Content-Type": "text/html" });
      response.end(data);
    }
  });
}

function sendJSONResponse(response, filePath) {
  const resolvedPath = path.resolve(filePath);

  fs.readFile(resolvedPath, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${resolvedPath}:`, err);
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "File Not Found" }));
    } else {
      try {
        const jsonData = JSON.parse(data); // Parse the file content to JSON
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(jsonData)); // Send the JSON data
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    }
  });
}

// Parse Request Body and Save it in JSON file
function parseBody(req) {
  let body = [];
  let parsedBody;
  let responseData = {};

  req.on("data", (buffer) => {
    body.push(buffer);
  });

  req.on("end", () => {
    parsedBody = Buffer.concat(body).toString();
    parsedBody.split("&").map((body) => {
      responseData[body.split("=")[0]] = body.split("=")[1];
    });

    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let obj = JSON.parse(data); //now it an object
        obj.data.push(responseData); //add some data
        let json = JSON.stringify(obj); //convert it back to json
        fs.writeFileSync("data.json", json); // write it back
      }
    });
  });

  return responseData;
}

server.listen(3001, () => {
  console.log("Node Server Started Running on http://localhost:3001/");
});
