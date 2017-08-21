document.addEventListener('DOMContentLoaded', function() {

var container = document.querySelectorAll('div.box');
var toggle = document.querySelector('div.toggle.o');
var boxOne = document.querySelector('div.box.one');
var boxTwo = document.querySelector('div.box.two');
var boxThree = document.querySelector('div.box.three');
var boxFour = document.querySelector('div.box.four');
var boxFive = document.querySelector('div.box.five');
var boxSix = document.querySelector('div.box.six');
var boxSeven = document.querySelector('div.box.seven');
var boxEight = document.querySelector('div.box.eight');
var boxNine = document.querySelector('div.box.nine');
var inputO = 'o';
var inputX = 'x';
var input = 'o';
var player1Counter = 0;
var player2Counter = 0;

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

    e.target.innerHTML = input;
    checkWinner();
    // var h = document.createElement("h1");
    // closestBox.appendChild(h);
    // h.innerHTML = input;
    // closestBox.classList.toggle('box-clicked');
 }
});

// Calculate Winner

function checkWinner() {
  container.forEach(function(c) {
    if (c[0].innerHTML === 'o' && c[1].innerHTML === 'o' && c[2].innerHTML === 'o' ) {
      window.alert('o has won!');
    }
  });
};





});
