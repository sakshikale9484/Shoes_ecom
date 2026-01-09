var mysql = require('mysql');
var util = require('util');

var connection = mysql.createConnection({
    "host":"b10vi40d6cfzel2sdms6-mysql.services.clever-cloud.com",
    "user":"ucmogcus2lyysuyb",
    "password":"EdkjgZNzvBkL0pXmpM1i",
    "database":"b10vi40d6cfzel2sdms6i"
});
var exe = util.promisify(connection.query).bind(connection);

module.exports = exe;
