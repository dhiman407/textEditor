exports.editorServer  = function (req, res) {
	'use strict';
	var io = req.app.locals.io;
	//TODO: create alphanumeric Id
	var generateId = function(){
		return Math.floor(Math.random() * 100000);
	};

	var uniqueId = req.params.uniqueId;

	if(uniqueId) {
		console.log('Got id: ' + uniqueId);
		var title = 'Session - ' + uniqueId;
		// TODO: from client JS connect to existing websocket for the id
		res.render('editor', { 'title': title, 'socketId' : uniqueId});
	} else {
		var id = generateId();
		io.sockets.on('connection', function (socket) {
			  socket.on('join',function(name){
				  socket.nickname = name;
				  console.log(name);
				  socket.broadcast.emit('announcement', name + ' joined the chat.');				  
			  })
		});
		res.redirect(302, '/editor/' + id);
		//TODO: open websocket here for each unique id
		// server side socket
	}
	
};