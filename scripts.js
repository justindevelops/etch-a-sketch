const buttons = document.querySelectorAll('button');
//for every button
buttons.forEach((button) => {
	//detect if it is being clicked
	button.addEventListener('click', (e) => {
		//if the reset button is clicked
		if (button.id == 'reset') {
			reset();
		}
	});
});

function makeGrid(rows, cols) {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			console.log('Hi');
			var div = document.createElement('div');
			div.setAttribute('id', 'cell');
			div.style.width = '18px';
			div.style.height = '18px';
			document.getElementById('container').appendChild(div);
		}
		//line break
		var jump = document.createElement('br');
		document.getElementById('container').appendChild(jump);
	}
}

function begin(x = 16) {
	console.log('Begin!');
	makeGrid(x, x);

	//select everything that is a cell id
	const cells = document.querySelectorAll('#cell');
	cells.forEach((cell) => {
		//when mouseover is triggered, mouseOver function is called
		cell.addEventListener('mouseover', mouseOver);
	});
}

function reset() {
	const cells = document.querySelectorAll('#cell');
	//turn every cell to white
	cells.forEach((cell) => {
		cell.style.backgroundColor = 'white';
	});
	//then ask how big the next grid is
	x = prompt('How many rows/cols should the next grid be?');
	if (x > 100) {
		x = 100;
	}

	//delete all the children grid cells
	const node = document.getElementById('container');
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}

	//start over
	begin(x);
}

//detect when mouse is hovering over the cell
function mouseOver() {
	let a = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	let c = Math.floor(Math.random() * 255);
	this.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
}

//detect when the mouse is taken out of the cell
function mouseOut() {
	this.style.backgroundColor = 'white';
}

begin();
