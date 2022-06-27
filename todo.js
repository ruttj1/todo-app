// store todo input in variable 

var toDo = [ ]; 

function addToDo () {
	// add users input into array
	toDo.push(document.getElementById("input").value);   	
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
		// create button element
		deleteTask = document.createElement("button"); 
		// create label for button
		displayDeleteTask = document.createTextNode("X"); 
		// insert contents of button
		deleteTask.appendChild(displayDeleteTask);  
		// create onclick tag for button element and assign function
		deleteTask.setAttribute("onclick", "this.parentElement.style.display = 'none'"); 
		// create location to insert list element 
		insertAt = document.getElementById("checkList"); 
		// insert list element to html
		insertAt.appendChild(listItem);  
		//insert button element to html in li 
		listItem.prepend(deleteTask); 
}

