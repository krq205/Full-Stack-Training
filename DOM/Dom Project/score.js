//select player 1 button
//select player 2 button
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var p1Display = document.querySelector('#p1Display');
//we now need a way to keep track of score
var p1Score = 0;
//select the h1 to start
var h1 = document.querySelector('p1Display');

//set up event handler, with callback and alert for now
p1Button.addEventListener('click', function(){
  p1Score++;
  p1Display.textContent = p1Score;//now take the h1 and change the context to be wtvr the score is
});