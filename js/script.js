function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var playerMove, computerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nozyce';
}
printMessage('Mój ruch: ' + computerMove);
computerMove = 0;

var item, playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nozyce';
} else {
  playerMove = 'kamień';
  printMessage('nieznany ruch');
}
printMessage('Twój ruch: ' + playerMove);