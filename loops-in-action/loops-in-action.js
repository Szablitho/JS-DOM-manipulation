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