//express web server

var express = require("express");

const mongodb = require("./data/database");
const app = express();

const port = 3000;

app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port);
    console.log(
      "Web Server is listening at port " + (process.env.port || port)
    );
  }
});