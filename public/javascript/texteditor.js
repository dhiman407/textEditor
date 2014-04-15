(function(){
var lastMessage;
 window.onload = function(){
var socket = io.connect('http://127.0.0.1:3001');
var editorFrame = document.getElementById('textEditor').contentWindow.document;
editorFrame.designMode="on";
editorFrame.close();
document.getElementById('textEditor').contentWindow.focus();
//Listening code
 socket.on('connect',function(){
	socket.emit('join',prompt('What is your nickname ?'));
 });
 socket.on('announcement',function(msg){
	 document.getElementById('textEditor').contentWindow.document.body.innerHTML = msg;
 });
 
//Data sending Code
 
};

})();