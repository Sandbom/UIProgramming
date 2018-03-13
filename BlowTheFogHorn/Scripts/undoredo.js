
var stack = [];
var current = -1;

function undoclick(){
	var list = document.getElementById("cartview");   // Get the <ul> element with id="myList"
	list.removeChild(list.lastChild);
	current--;
}

function redoclick(){
	itemtoredo = popfromstack();
	var cartlist = document.getElementById("cartview");
	cartlist.appendChild(itemtoredo);
	current++;
}

function addtostack(object){
	stack.push(object);
	current++;
}

function popfromstack(){
	if (current >= 0){
		//popped = stack.pop()
		popped = stack[current];
		return popped;
	}
}