// First example: Sum number
const calculateBtn = document.querySelector("#calculator button");

calculateSum = () => {
  const userNumber = document.querySelector("#user-number").value;
  let sumUpToNumber = 0;
  //loop starts with two variables at 0. sumUpToNumber is reasigned on every cycle with sum of calculation
  // addedNumb is +1 bigger on every cycle
  //loop stop when addedNumb is equal to userNumb
  // first calculations happening :0+0, 0+1, 1+2, 3+3
  // 
  for(let addedNumb = 0 ; addedNumb <= userNumber; addedNumb++) {
    sumUpToNumber = sumUpToNumber + addedNumb;
  }
  document.querySelector("#calculated-sum").style.display = "block";
  document.querySelector("#calculated-sum").textContent = sumUpToNumber;
}
calculateBtn.addEventListener("click", calculateSum);

//highlight links exercise
highlightAnchor = () => {
  const anchors = document.querySelectorAll("#highlight-links a");
  for (const anchor of anchors) {
    if(anchor.className.includes("highlight")) {
    anchor.classList.remove("highlight");
    } else {
      anchor.classList.add("highlight");
    }
  }
}
const highlightBtn = document.querySelector("#highlight-links button");
highlightBtn.addEventListener("click", highlightAnchor);

// display user data exercise
const dummyData = {
  firstName: 'randomName',
  lastName: 'randomFullname',
  age: 'old enough'
};
const displayDataBtn = document.querySelector("#user-data button");
const displayData = () => {
  const dataContainer = document.querySelector("#output-user-data");
  if(!dataContainer.innerHTML == '') {
    dataContainer.innerHTML = '';
    displayDataBtn.textContent = "Display User Data";
  } else {
      for (const key in dummyData) {
        if (Object.hasOwnProperty.call(dummyData, key)) {
          const listItem = document.createElement('li');
          const data = dummyData[key];
          listItem.textContent = key.toUpperCase() + ": "+data;
          dataContainer.append(listItem);
        }
      }
      displayDataBtn.textContent = "Refresh User Data";
    }
  }
displayDataBtn.addEventListener("click", displayData);

//statistic/role dice exercise
const statisticBtn = document.querySelector('#statistics button');

const rollDice = () => Math.floor(Math.random()*6) + 1;
const deriveNumberOfDiceRolls = () => {
  const targetRollNumber = document.querySelector("#user-roll-number").value;
  const diceRollsList = document.querySelector("#dice-rolls");
  diceRollsList.innerHTML = ''; //for clearing rolls on every click
  
  let hasRolledTargetNumber = false;
  let numberOfRolls = 0; //while loop is incrementing this until wanted dice is outputed, its also number of total rolls outputed in final step

  while(!hasRolledTargetNumber) {
   const rolledNumber = rollDice(); //value of rolled dice is stored here
   //double equal because input value even from number input is a string. We want to either covert that value by adding "+" in front of value or we use double equal sign comparison
    // if(hasRolledTargetNumber == targetRollNumber) { 
    //   hasRolledTargetNumber = true;
    // }
    //we can replace this if with
    numberOfRolls++;

    // outputing on page every roll until hitting the wanted dice
    const newRollListItem = document.createElement('li');
    newRollListItem.textContent = 'Roll '+ numberOfRolls + ': ' + rolledNumber;
    diceRollsList.append(newRollListItem);
    hasRolledTargetNumber = targetRollNumber == rolledNumber; // on a right sign of reasigning this expression yields true or false, leaving while loop when wanted dice in RolledNumber is equal to dice chosen by user in targetRollNumber
  }
  //outputing targeted dice and total number of rolls
  const outputRolls = document.querySelector("#output-total-rolls");
  const outputTargetDiceNumber = document.querySelector("#dice-number");
  
  outputTargetDiceNumber.textContent = targetRollNumber; // from input
  outputRolls.textContent = numberOfRolls; //total number of rolls
}
statisticBtn.addEventListener('click', deriveNumberOfDiceRolls);