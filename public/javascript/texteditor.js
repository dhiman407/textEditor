(function(){
    var lastMessage;
    window.onload = function(){
        var url = window.location.href.split('editor');
        var namespace = url[1];
        var socket = io.connect(url[1]);
        var editorFrame = document.getElementById('textEditor').contentWindow.document;
        editorFrame.designMode = "on";
        editorFrame.close();
        document.getElementById('textEditor').contentWindow.focus();
        //Listening code
        socket.on('connect', function(){
            socket.emit('join', prompt('What is your nickname ?'));
        });
        socket.on('announcement', function(msg){
            document.getElementById('textEditor').contentWindow.document.body.innerHTML = msg;
        });
        
        //Data sending Code
    
    };
    
})();
