document.addEventListener('DOMContentLoaded', function() {

var c = document.querySelectorAll('div.box');
var inputO = 'o';
var inputX = 'x';
var input = 'o';
var drawCounter = 0;

// Allow click detection from parent container
var clickBox = document.querySelector('#container');

clickBox.addEventListener('click', function(e) {
  var closestBox = e.target.closest('.box');
  if ( closestBox ) {
    if (input === 'o') {
      input = 'x';
    }  else if (input === 'x') {
      input = 'o';
    }
    if (e.target.innerHTML === 'o' || e.target.innerHTML === 'x') {
      window.alert('Please choose an open square.')
      if (input === 'o') {
        input = 'x';
      }  else if (input === 'x') {
        input = 'o';
      }
    } else {
        e.target.innerHTML = input;
        drawCounter += 1;
    }
  setTimeout(function() { checkWinner(); }, 1000);
}
});

// Calculate Winner

function checkWinner() {
    if (c[0].innerHTML === 'o' && c[1].innerHTML === 'o' && c[2].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[3].innerHTML === 'o' && c[4].innerHTML === 'o' && c[5].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[6].innerHTML === 'o' && c[7].innerHTML === 'o' && c[8].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[0].innerHTML === 'o' && c[3].innerHTML === 'o' && c[6].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[1].innerHTML === 'o' && c[4].innerHTML === 'o' && c[7].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[2].innerHTML === 'o' && c[5].innerHTML === 'o' && c[8].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[2].innerHTML === 'o' && c[4].innerHTML === 'o' && c[6].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[0].innerHTML === 'o' && c[4].innerHTML === 'o' && c[8].innerHTML === 'o' ) {
      window.alert('o has won!');
    } else if (c[3].innerHTML === 'x' && c[4].innerHTML === 'x' && c[5].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[6].innerHTML === 'x' && c[7].innerHTML === 'x' && c[8].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[0].innerHTML === 'x' && c[3].innerHTML === 'x' && c[6].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[1].innerHTML === 'x' && c[4].innerHTML === 'x' && c[7].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[2].innerHTML === 'x' && c[5].innerHTML === 'x' && c[8].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[2].innerHTML === 'x' && c[4].innerHTML === 'x' && c[6].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[0].innerHTML === 'x' && c[4].innerHTML === 'x' && c[8].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (c[0].innerHTML === 'x' && c[1].innerHTML === 'x' && c[2].innerHTML === 'x' ) {
      window.alert('x has won!');
    } else if (drawCounter === 9) {
      window.alert('Draw Game!');
    }
};
});
