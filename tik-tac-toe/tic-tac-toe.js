
const editBtn1 = document.querySelector("#first-player button");
const editBtn2 = document.querySelector("#second-player button");
const confirmBtn = document.querySelector("#confirm-name");
const cancelBtn = document.querySelector("#cancel-name");
const startGameBtn = document.querySelector('main > button');

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
  let playerID;
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
  playerID = localStorage.getItem('playerID');
  console.log(playerID);
  console.log(localStorage.getItem('playerID')); // this updates the ID in local storage, always use getItem to refresh ID, not "setItem"
  const setPlayerNameInput = document.querySelector("#player-name-input");
   //validation of name if empty or white spaces(with regular expression)
   if(setPlayerNameInput.value == '' ||  /\W/.test( setPlayerNameInput.value ) ) {
    setPlayerNameInput.style.backgroundColor = "rgb(255, 110, 110)";
  } else {
    //checking playerID and setting new name on assigned to it <span> tag
    if(playerID == 1) {
      let playerOne = document.querySelector("#first-player span").textContent = setPlayerNameInput.value;
      overlay.style.visibility = "hidden";
      undarkenBackground();
    } else { 
        let playerTwo = document.querySelector("#second-player span").textContent = setPlayerNameInput.value;
        overlay.style.visibility = "hidden";
        undarkenBackground();
    }
  }
  
}
const cancelEditingName = () => {
  overlay.style.visibility = "hidden";
  undarkenBackground();
}
//make function that show game panel, disables profile panel,restarts game
function startGame() {

}
//func making turn
function playTic() {
  
}

editBtn1.addEventListener("click", displayControlPanel);
editBtn2.addEventListener("click", displayControlPanel);
confirmBtn.addEventListener("click", confirmName);
cancelBtn.addEventListener("click",cancelEditingName);
startGameBtn.addEventListener('click', startGame);

// edit initialization(confirm name with editPlayerName inside)/overlay appear and player ID is known
// editing name func/validation
//confirmation or cancel