
const editBtn1 = document.querySelector("#first-player button");
const editBtn2 = document.querySelector("#second-player button");
const confirmBtn = document.querySelector("#confirm-name");
const cancelBtn = document.querySelector("#cancel-name");

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
  document.querySelector("header, main").style.filter = "initial";
  document.querySelector("header, main").style.filter = "initial";
  document.querySelector("div,section").style.filter = "initial";
  document.querySelector("#win-award,  footer").style.filter = "initial";
  document.querySelector("main > button").style.filter = "initial";
  document.querySelector("footer").style.filter = "initial";
  let spans = document.querySelectorAll("#game span");
    for (const span of spans) {
      span.style.filter = "initial";
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
    return playerID;
  } else {
    let playerID = ID;
    console.log(playerID);
    return playerID;
  }
  // console.log(playerID); //undefined
}

function confirmName(playerID) { //pointer event???
  console.log(overlay);
  console.log(playerID);
  const setPlayerNameInput = document.querySelector("#player-name-input");
   //validation of name
  if(setPlayerNameInput.value == '') {
    setPlayerNameInput.style.backgroundColor = "rgb(255, 110, 110)";
  } else {
    //checking playerID
    if(playerID == 1) {
      let playerOne = document.querySelector("#first-player span").textContent = setPlayerNameInput.value;
      overlay.style.visibility = "hidden";
      return playerOne;
      undarkenBackground();
    } else { 
        let playerTwo = document.querySelector("#second-player span").textContent = setPlayerNameInput.value;
        overlay.style.visibility = "hidden";
        return playerTwo;
        undarkenBackground();
    }
  }
  
}
const cancelEditingName = () => {
  overlay.style.visibility = "hidden";
  undarkenBackground();
}

editBtn1.addEventListener("click", displayControlPanel);
editBtn2.addEventListener("click", displayControlPanel);
confirmBtn.addEventListener("click", confirmName);
cancelBtn.addEventListener("click",cancelEditingName);


function newFunction() {
  let playerName;
  return playerName;
}
// edit initialization(confirm name with editPlayerName inside)/overlay appear and player ID is known
// editing name func/validation
//confirmation or cancel