let cells = document.querySelectorAll('td');
let turn = 2;

function checkValues() {
	let b1 = document.querySelector('#one').textContent;
	let b2 = document.querySelector('#two').textContent;
	let b3 = document.querySelector('#three').textContent;
	let b4 = document.querySelector('#four').textContent;
	let b5 = document.querySelector('#five').textContent;
	let b6 = document.querySelector('#six').textContent;
	let b7 = document.querySelector('#seven').textContent;
	let b8 = document.querySelector('#eight').textContent;
	let b9 = document.querySelector('#nine').textContent;

	blocks = [b1,b2,b3,b4,b5,b6,b7,b8,b9]
	
	if (b1 === b2 && b2 === b3 && b3 === 'X' || b1 == b5 && b5 == b9 && b9 == 'X' || b1 === b4 && b4 === b7 && b7 === 'X' || b2 === b5 && b5 === b8 && b8 === 'X' || b3 === b6 && b6 === b9 && b9 === 'X' || b3 === b5 && b5 === b7 && b7 === 'X' || b4 === b5 && b5 === b6 && b6 === 'X' || b7 === b8 && b8 === b9 && b9 === 'X') {
		alert('Player 1 has won');
		return 0
	}

	if (b1 === b2 && b2 === b3 && b3 === 'O' || b1 == b5 && b5 == b9 && b9 == 'O' || b1 === b4 && b4 === b7 && b7 === 'O' || b2 === b5 && b5 === b8 && b8 === 'O' || b3 === b6 && b6 === b9 && b9 === 'O' || b3 === b5 && b5 === b7 && b7 === 'O' || b4 === b5 && b5 === b6 && b6 === 'O' || b7 === b8 && b8 === b9 && b9 === 'O') {
		alert('Player 2 has won');
		return 0
	}
}

function tieCheck() {
	if (!(blocks.includes(''))) {
			alert('Game Over')
		}
}


function game(c) {
	player1 = 0
	player2 = 1

	if (turn === 2) {
		turn = player1
		if (c.textContent === '') {
			c.textContent = 'X'
			checkValues();
			tieCheck();
		}
		else {
			alert('Already used space')
		}

	}
	else if (turn === player1) {
		turn = player2

		if (c.textContent === '') {
			c.textContent = 'O';
			checkValues();
			tieCheck();
		}
		else {
			alert('Already used space');
		}
	}
	else if (turn === player2) {
		turn = player1

		if (c.textContent === '') {
			c.textContent = 'X';
			checkValues();
			tieCheck();
		}
		else {
			alert('Already used space');
		}
	}

}