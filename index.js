const express = require("express");
const convert = require("./public/js/convert.js");

const app = express();

const PORT = 5100;

app.get("/:epoch_seconds", function (req, res) {
  const { epoch_seconds } = req.params;
  const epoch_to_string = convert.epoch_to_ISOString(epoch_seconds);
  const data = {
    status: res.statusCode,
    message: "OK",
    data: epoch_to_string,
  };
  res.json(data);
});

// PORT setting
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
