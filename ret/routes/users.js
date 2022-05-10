var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "test"
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	connection.query("select * from todos LIMIT 0, 10", function(
	error,
	results,
	fields
	) {
	if (error) throw error;
	res.send(results);
	});
//   res.json([{
//   	id: 1,
//   	username: "99"
//   }, {
//   	id: 2,
//   	username: "masalib"
//   }]);
});

module.exports = router;