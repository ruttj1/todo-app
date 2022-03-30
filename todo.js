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
		// create element to store task in
		listItem = document.createElement("li"); 
		// create contents of list element
		displayTask = document.createTextNode(task); 
		// create id for list element
		listItem.id = task;
		// insert contents of list element
		listItem.appendChild(displayTask); 
		// create location to insert list element 
		insertAt = document.getElementById("checkList"); 
		// insert list element to html
		insertAt.appendChild(listItem);  
}

