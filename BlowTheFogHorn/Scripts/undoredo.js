
var stack = [];
var current = -1;

function undoclick(){
	//ev.preventDefault();
	//var popped = stack.pop();
	//var poppedstr = popped.toString();
	//var draganddropelement = document.getElementById(poppedstr);
	//draganddropelement.parentNode.removeChild(draganddropelement);
	var list = document.getElementById("cartview");   // Get the <ul> element with id="myList"
	list.removeChild(list.lastChild); 
}

/// CURRENTLY ADDS A LIST ELEMENT WATER INTO THE CART FOR TESTING PURPOSES!
function redoclick(){
	//ev.preventDefault();
	//ev.target.appendChild(nodeCopy);
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode("Water");         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("cartview").appendChild(node);     // Append <li> to <ul> with id="myList"
}

function addtostack(object){
	stack.push(object);
	current++;
}