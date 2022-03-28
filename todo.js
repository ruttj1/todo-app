// store todo input in variable 

var toDo = [ ]; 

function addToDo () {
	toDo.push(document.getElementById("input").value);  
	alert("Added " + toDo);  
	document.getElementById("checkList").innerHTML = toDo; 
}  
// display todo input
 
