// store todo input in variable 

var toDo = [ ]; 

function addToDo () {
	// add users input into array
	toDo.push(document.getElementById("input").value);  
	alert("Added " + toDo);  	
}  
// display todo input
function displayTasks (toDo) {
	for (var i = 0; i < toDo.length; i++) { 
		task = toDo[i]; 
	} 
		listItem = document.createElement("li"); 
		displayTask = document.createTextNode(task); 
		listItem.appendChild(displayTask); 
		insertAt = document.getElementById("checkList"); 
		insertAt.appendChild(listItem);  
}

