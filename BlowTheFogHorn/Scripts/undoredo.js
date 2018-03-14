
//Despite it being a poor mans solution we keep the stack and current variables global for simpleness
//Current starts at -1 since index 0 is first element
var stack = [];
var current = -1;

// This function is triggered when pressing the undo button and it removes the last child
// from the div with id "cartview"
function undoclick(){
	var list = document.getElementById("cartview");
	list.removeChild(list.lastChild);
	current--;
}

//This function is triggered when pressing the redo button and it pops the most recent item from the stack
// and re-adds it to the div element with id "cartview"
function redoclick(){
	if (current >=0){
		itemtoredo = popfromstack();
		var cartlist = document.getElementById("cartview");
		cartlist.appendChild(itemtoredo);
		current++;
	}
}

// Here we push to the stack so that we know what to extract later when extracting,
// because of this we use this function every time a drag & drop is performed
function addtostack(object){
	stack.push(object);
	current++;
}

// This function returns the most recently added element from the stack 
// assuming there has been a drag & drop in the first place
function popfromstack(){
		//popped = stack.pop() //not sure if this is correct, I feel that we want to pop the item off the stack at some point
		popped = stack[current];
		return popped;
}