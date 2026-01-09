var mysql = require('mysql');
var util = require('util');

var connection = mysql.createConnection({
    "host":"b03vosp0ki1fhpfvu5yi-mysql.services.clever-cloud.com",
    "user":"u0xdrsks0qekr0ic",
    "password":"MQkSI61bHmaWnpi9W5Ji",
    "database":"b03vosp0ki1fhpfvu5yi"
});
var exe = util.promisify(connection.query).bind(connection);

module.exports = exe;
