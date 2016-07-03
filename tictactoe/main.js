var winConditions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
var squares = document.getElementsByTagName("li");
var resetButton = document.getElementsByTagName("button")[0];
var isX = [];
var isO = [];
var opponentPick = [];
var isWinner = false;

for (var i=0; i<squares.length; i++) {
  squares[i].innerHTML = "";
  squares[i].addEventListener('click', playerMove);
}


function playerMove() {
  if (this.innerHTML === "") {
    this.innerHTML = "x";
    isX.push(this.value);
    winCheck(isX);
    if (isWinner === true) {
      alert("You win! Click OK to play again.");
      reset(); 
    } else {
      opponent();  
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
    for (var i=0; i<8; i++) {
      winner(winConditions[i][0],winConditions[i][1],winConditions[i][2]);
    }
}
  
//Reset board 
resetButton.addEventListener('click', reset);

function reset() {
  isX = [];
  isO = [];
  isWinner = false;
  for (var i=0; i<squares.length; i++) {
    squares[i].innerHTML = "";
  }
}

//Computer plays back with random selections
function opponent() {
  for (var i=0; i<squares.length; i++) {
    if (squares[i].innerHTML === "") {
      opponentPick.push(i);
    } 
  }

  if (opponentPick.length === 0){
    alert("It's a draw. Click OK to play again");
    reset();
  } else {  
    i = opponentPick[Math.floor(Math.random() * (opponentPick.length))];
    squares[i].innerHTML = "<p>o</p>";
    isO.push(squares[i].value);
    winCheck(isO);
    if (isWinner === true) {
      alert("You lost. Ouch. Click OK to play again.");
      reset(); 
    }
  }
  opponentPick = [];
}


