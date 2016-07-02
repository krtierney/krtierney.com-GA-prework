var winConditions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
var squares = document.getElementsByTagName("li");
var resetButton = document.getElementsByTagName("button")[0];
var playerTurn = 0;
var isX = [];
var isO = [];
var isWinner = false;

for (var i=0; i<squares.length; i++) {
  squares[i].innerHTML = "";
  squares[i].addEventListener('click', playerMove);
}


function playerMove() {
  if (this.innerHTML === "") {
    if (playerTurn % 2 === 0) {
      this.innerHTML = "x";
      isX.push(this.value);
      winCheck(isX);
      if (isWinner === true) {
        alert("The X has it. Click OK to play again.");

        reset(); 
      }
    } else {
      this.innerHTML = "<p>o</p>";
      isO.push(this.value);
      winCheck(isO);
      if (isWinner === true) {
        alert("O wins! Click OK to play again.");
        reset(); 
      }
    }
    playerTurn++;
    if (playerTurn === 9) {
      alert("It's a draw. Click OK to play again");
    }

  }
}

function winCheck(playerArray) {
  function winner(a,b,c) {
    if (playerArray.includes(a) && playerArray.includes(b) 
    && playerArray.includes(c)) {
      isWinner = true;
    } 
  }
    //Try to rewrite this as a loop to cycle through and call winner() for  each set of arguments
    winner(winConditions[0][0],winConditions[0][1],winConditions[0][2]);
    winner(winConditions[1][0],winConditions[1][1],winConditions[1][2]);
    winner(winConditions[2][0],winConditions[2][1],winConditions[2][2]);
    winner(winConditions[3][0],winConditions[3][1],winConditions[3][2]);
    winner(winConditions[4][0],winConditions[4][1],winConditions[4][2]);
    winner(winConditions[5][0],winConditions[5][1],winConditions[5][2]);
    winner(winConditions[6][0],winConditions[6][1],winConditions[6][2]);
    winner(winConditions[7][0],winConditions[7][1],winConditions[7][2]);
}
  
//Reset board 
resetButton.addEventListener('click', reset);

function reset() {
  playerTurn = 0;
  isX = [];
  isO = [];
  isWinner = false;
  for (var i=0; i<squares.length; i++) {
    squares[i].innerHTML = "";
  }
}

//Computer plays back: After the win check, pick a random element and add an O to the inner.html
//How? Select all squares with empty strings in the inner.HTML. 
//Use Math.floor and Math.random to select a random number between 0 and 8
//pass that as the selector for squares[] to select a random square
//Pick a random one of that subset and add inner.HTML.

// function opponent() {

// }



