exports.editorServer  = function (req, res) {
	'use strict';
	var io = req.app.locals.io;
	//TODO: create alphanumeric Id
	var generateId = function(){
		return Math.floor(Math.random() * 100000);
	};
	
	
	var uniqueId = req.params.uniqueId;
	if(uniqueId){
		var socket = io.of('/'+uniqueId);
		socket.on('connection', function (socket) {
			  socket.on('join',function(name){
				  socket.nickname = name;
				  console.log(name);
				  socket.broadcast.emit('announcement', name + ' joined the chat.');				  
			  });
			});
		var title = 'Session - ' + uniqueId;
		res.render('editor', { 'title': title, 'socketId' : uniqueId});
	}else{
		var id = generateId();
		var socket = io.of('/'+id);
		socket.on('connection', function (socket) {
			console.log(socket);
		});
		res.redirect(302, '/editor/' + id);
	}
		//TODO: open websocket here for each unique id
		// server side socket
	
};