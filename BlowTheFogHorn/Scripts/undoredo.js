//Despite it being a poor mans solution we keep the stack and current variables global for simpleness
//Current starts at -1 since index 0 is first element
var undostack = [];
var undocount = -1;
var stack = [];
var current = -1;
var sumlist = [];
var redosumlist = [];
var totalsum = 0;
var tempsum = 0;
// This function is triggered when pressing the undo button and it removes the last child
// from the div with id "cartview"
function undoclick(){
	if(current>= 0){
		var list = document.getElementById("cartview");
		var undoitem = document.getElementById("cartview").lastChild;
		list.removeChild(list.lastChild);
		nysum = returnsum();
		tempsum = nysum;
		$("#totalid").text("Totalsumma: " + nysum + " kr.");
		current--;
		//addtostack(list.lastChild);
		undostack.push(undoitem);
		totalsum = totalsum - (totalsum - nysum);
		undocount++;
	}
}

//This function is triggered when pressing the redo button and it pops the most recent item from the stack
// and re-adds it to the div element with id "cartview"
function redoclick(){
	//if ((stack.length)>0)){ // I dont know why this does not work and it is kind of needed
		//nyaresum = popredosum();
		itemtoredo = undostack[undocount];
		undostack.pop();
		var cartlist = document.getElementById("cartview");
		cartlist.appendChild(itemtoredo);
		current++;
		addsum(tempsum);
		redototalamount();
		undocount--;
//	}
}

function redototalamount(){
	sumundone = popredosum();
	totalsum = totalsum + sumundone;
	$("#totalid").text("Totalsumma: " + totalsum + " kr.");
}

// Here we push to the stack so that we know what to extract later when extracting,
// because of this we use this function every time a drag & drop is performed
function addtostack(object){
	stack.push(object);
	current++;
}

function addundostack(object){
	undostack.push(object);
}

// This function returns the most recently added element from the stack 
// assuming there has been a drag & drop in the first place
function popfromstack(){
		popped = stack.pop() //not sure if this is correct, I feel that we want to pop the item off the stack at some point
		//popped = stack[current];
		return popped;
}


function addsum(object){
	sumlist.push(object);
}

function addredosum(object){
	redosumlist.push(object);
}

function popredosum(){
	ra = redosumlist.pop();
	return ra;
}

function returnsum(){
	rs = sumlist.pop();
	return rs;
}




