const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test"
});

app.get("/", function(req, res) {
  connection.query("select * from todos", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.send(results[1].appointedto+"//ddd");
  });
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});

