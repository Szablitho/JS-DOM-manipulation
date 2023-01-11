
let playerID;
const editBtn1 = document.querySelector("#first-player button");
const editBtn2 = document.querySelector("#second-player button");
const confirmBtn = document.querySelector("#confirm-name");
const cancelBtn = document.querySelector("#cancel-name");
const startGameBtn = document.querySelector('main > button');
const controlPanel = document.querySelector(".control");
const gameBlock = document.querySelector("#game");
const gameField = document.querySelectorAll(".tic-tak-toe-block");
const turnNotice = document.querySelector("#turn-notice");
const winAward = document.querySelector('#win-award');

// to be replaced by additinal dark overlay under controlPanel
function darkenBackground() {
  document.querySelector("header, main").style.filter = "brightness(0.3)";
  document.querySelector("header, main").style.filter = "brightness(0.3)";
  document.querySelector("div,section").style.filter = "brightness(0.3)";
  document.querySelector("#win-award,  footer").style.filter = "brightness(0.3)";
  document.querySelector("main > button").style.filter = "brightness(0.3)";
  document.querySelector("footer").style.filter = "brightness(0.3)";
  let spans = document.querySelectorAll("#game span");
    for (const span of spans) {
      span.style.filter = "brightness(0.3)";
    }
}

function undarkenBackground() {
  const allEll = document.querySelectorAll("*");
    for (const element of allEll) {
      element.style = "initial";
    }
}

function displayControlPanel(event) {
  let ID = event.target.value;
  const overlay = document.querySelector('#overlay');
  overlay.style.visibility = "visible";
  darkenBackground();
  if(ID == 1) {
    let playerID = ID;
    console.log(playerID);
    localStorage.setItem('playerID', playerID);
  } else {
    let playerID = ID;
    console.log(playerID);
    localStorage.setItem('playerID', playerID);
  }
}

function confirmName() { //pointer event???
  let firstPlayerName = document.querySelector("#first-player span");
  let secondPlayerName = document.querySelector("#second-player span");
  playerID = localStorage.getItem('playerID');
  console.log(playerID); // this updates the ID in local storage, always use getItem to refresh ID, not "setItem"
  const setPlayerNameInput = document.querySelector("#player-name-input");
   //validation of name if empty or white spaces(with regular expression)
   if(setPlayerNameInput.value == '' ||  /\W/.test( setPlayerNameInput.value ) || firstPlayerName ==  setPlayerNameInput.value || secondPlayerName == setPlayerNameInput.value) {
    setPlayerNameInput.style.backgroundColor = "rgb(255, 110, 110)";
  } else {
    //checking playerID and setting new name on assigned to it <span> tag
    if(playerID == 1) {
      let name = document.querySelector("#first-player span").textContent = setPlayerNameInput.value;

      const playerOne = [playerID, name,'X'];
      //saving array in browser local storage, have to convert it to string first
      localStorage.setItem('playerOne', JSON.stringify(playerOne));

      overlay.style.visibility = "hidden";
      undarkenBackground();
    } else { 
        let name = document.querySelector("#second-player span").textContent = setPlayerNameInput.value;
        const playerTwo = [playerID, name, "O"];
        localStorage.setItem("playerTwo", JSON.stringify(playerTwo));
        overlay.style.visibility = "hidden";
        undarkenBackground();
      }
      startGameBtn.style.display = "initial";
  }
}
const cancelEditingName = () => {
  overlay.style.visibility = "hidden";
  undarkenBackground();
}
//make function that show game panel, disables profile panel,restarts game
let gameRestart = false;
function startGame() {
  if(!gameRestart) {
    gameBlock.style.display = "grid";
    gameBlock.style.pointerEvents = "all";
    controlPanel.style.pointerEvents = "none";
    let playerOne = JSON.parse(localStorage.getItem('playerOne'));
    turnNotice.innerText = `Your turn ${playerOne[1]}!`;
    turnNotice.style.display = "initial";
    localStorage.setItem('currentTurnPlayerID',1); // always player one will start

    return gameRestart = true;
  } else {
    gameBlock.style.display = "none";
    turnNotice.style.display = "none";
    controlPanel.style.pointerEvents = "auto";
    gameField.forEach(el => { 
      el.style.backgroundColor = "";
      el.style.pointerEvents = "auto";
      el.innerText = ' ';
      winAward.style.display = "none";
    });
    return gameRestart = false;
  }
}
//func making turn
function playTic(event) {
  console.log(event.target.id);
  //checking ID of current turn player
  let currentTurnPlayerID = localStorage.getItem('currentTurnPlayerID');

  if(currentTurnPlayerID == 1) {
    // execution for player one, switching id to 2
    console.log("player One made turn");
    event.target.innerText = "X";
    let playerTwo = JSON.parse(localStorage.getItem("playerTwo"));
    currentTurnPlayerID = localStorage.setItem('currentTurnPlayerID',2);
    turnNotice.innerText = `Your turn ${playerTwo[1]}!`;
    let playerOne = JSON.parse(localStorage.getItem("playerOne"));

    checkWinner(playerOne);

  } else if(currentTurnPlayerID == 2) {
    //execution for player two,switching id to 1
    console.log("player Two made turn");
    event.target.innerText = "O";
    let playerOne = JSON.parse(localStorage.getItem("playerOne"));
    currentTurnPlayerID = localStorage.setItem('currentTurnPlayerID',1);;
    turnNotice.innerText = `Your turn ${playerOne[1]}!`;
    let playerTwo = JSON.parse(localStorage.getItem("playerTwo"));

    checkWinner(playerTwo);

  } else {
    alert("For better expierience, create names!");
  }
  event.target.style.backgroundColor = "var(--text-orange-900)";
  event.target.style.pointerEvents = "none";
}

function checkWinner(player) {
  let ID = player[0];
  let name = player[1];
  let tag = player[2];
  console.log(`ID: ${ID},name: + ${name}, +tag: ${tag}`);
  //in forEach loop save values from game fields
  let array = [];
      //1st arg = html target, 2nd arg = index of array, 3rd arg = array name
  gameField.forEach((field,index) => {
    array[index] = field.innerText; //saving field value in a array
    console.log(array);
    });
    //check if there are fields left to fill, if so, it is then a draw
    const areFieldsFull = (value) => value != '';
    if(array.every(areFieldsFull)) {
      winAward.innerHTML = "DRAW";
      winAward.style.display = "block";
      gameBlock.style.pointerEvents = "none";
      console.log("Player won in last movement! Draw was overwritten by his win - literally in this code");
    }
    //checking if win cases scenarios are met, done just once after all tags were saved in fields and in array for later checkup,making equation to playerTag that is switching on every call of function
    switch (true) {
      //horizontal rows
      case (array[0] == tag && array[1] == tag && array[2] == tag):
        makeWinner(name);
        break;
      case (array[3] == tag && array[4] == tag && array[5] == tag):
        makeWinner(name);
        break;
      case (array[6] == tag && array[7] == tag && array[8] == tag):
        makeWinner(name);
        break;
        // vertical all rows
      case (array[0] == tag && array[3] == tag && array[6] == tag):
        makeWinner(name);
        break;
      case (array[1] == tag && array[4] == tag && array[7] == tag):
        makeWinner(name);
        break;
      case (array[2] == tag && array[5] == tag && array[8] == tag):
        makeWinner(name);
        break;
        //diagonall
      case (array[2] == tag && array[4] == tag && array[6] == tag):
        makeWinner(name);
        break;
      case (array[0] == tag && array[4] == tag && array[8] == tag):
        makeWinner(name);
        break;
    }
}
function makeWinner(name) {
  //setting winner
  winAward.innerHTML = `Chicken dinerrr! ${name} is a winnerrrrrrrrrr`;
  winAward.style.display = "block";
  //disabling gameField
  gameBlock.style.pointerEvents = "none";
}
  
editBtn1.addEventListener("click", displayControlPanel);
editBtn2.addEventListener("click", displayControlPanel);
confirmBtn.addEventListener("click", confirmName);
cancelBtn.addEventListener("click", cancelEditingName);
startGameBtn.addEventListener('click', startGame); // or restart
gameField.forEach( el => el.addEventListener("click", playTic));

// edit initialization(confirm name with editPlayerName inside)/overlay appear and player ID is known
// editing name func/validation
//confirmation or cancel