window.onload = function(){
 document.getElementById('textEditor').contentWindow.document.designMode="on";
 document.getElementById('textEditor').contentWindow.document.close();
 var edit = document.getElementById("textEditor").contentWindow;
 edit.focus();
};