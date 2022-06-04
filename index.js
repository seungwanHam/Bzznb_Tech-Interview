const express = require("express");
const convert = require("./public/js/convert.js");

const app = express();

const PORT = 5100;

app.get("/:epoch_seconds", function (req, res) {
  const { epoch_seconds } = req.params;
  const epoch_to_string = convert.epoch_to_ISOString(epoch_seconds);
  // res.writeHead(200, "Current password does not match");
  const msg = res.stausCode == 200 || 304 ? "OK" : "nop";
  const data = {
    status: res.statusCode,
    message: msg,
    data: epoch_to_string,
  };
  res.send(data);
});

app.use(express.static("public"));

app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + "/views/error404.html");
});

app.use(function (err, req, res, next) {
  res.status(500).sendFile(__dirname + "/views/error500.html");
});

// PORT setting
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
