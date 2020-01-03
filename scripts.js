const container = document.getElementById('container');

function makeGrid(rows, cols) {
	for (var i = 0; i < cols; i++) {
		for (var j = 0; j < rows; j++) {
			var div = document.createElement('div');
			div.style.width = '25px';
			div.style.height = '25px';
			document.getElementById('container').appendChild(div);
			console.log('done!');
		}
		var jump = document.createElement('br');
		document.getElementById('container').appendChild(jump);
	}
}

makeGrid(16, 16);

function mouseOver() {
	console.log('detected');
	//document.getElementById('div').style.background = blue;
}

const divs = document.querySelectorAll('div');
divs.forEach((div) => {
	div.addEventListener('mouseover', mouseOver);
});
