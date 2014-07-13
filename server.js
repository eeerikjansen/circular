/* var fs = require("fs");
var file = "charts.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file); */

var io = require('socket.io').listen(1337);

io.sockets.on('connection', function(socket) {
console.log("eerder");
	
	socket.on('randomLed', function(data) {
		console.log("Er is een bericht binnengekomen van de charts htmlpagina");
		console.log(data.index);
		var indexDubbel = data.index * 2;
		console.log(indexDubbel);
		socket.emit('indexTerug', indexDubbel);
		
   });
   
   
});