const dotenv = require("dotenv");
dotenv.config();

const https = require("follow-redirects").https;

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
const path = require("path");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.static("src/client"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("src/client/views/index.html"));
});

const port = 8080;
app.listen(port, listening);

function listening() {
  console.log("#################################");
  console.log("##                             ##");
  console.log("##      Server running!!!      ##");
  console.log(`## App listening on port ${port}: ##`);
  console.log("##                             ##");
  console.log("#################################");
}

app.post("/lang", (req, res) => {
  const text = req.body.data;
  const key = process.env.API_KEY;
  const path = "/lang-2.0?key=" + key + "&txt=" + encodeURIComponent(text.trim());

  console.log(path);

  const options = {
    method: "POST",
    hostname: "api.meaningcloud.com",
    path: path,
    headers: {},
    maxRedirects: 20,
  };

  const request = https.request(options, (response) => {
    const chunks = [];

    response.on("data", (chunk) => {
      chunks.push(chunk);
      var body = Buffer.concat(chunks).toString();
      console.log(body);
      res.send(body);
    });
  });

  request.end();
});
