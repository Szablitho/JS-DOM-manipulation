const textInput = document.querySelector(".input-text");
textInput.addEventListener("input", (event) => {
  const enteredText = event.target;
  const counter = document.querySelector(".text-counter");
  const maxChars = textInput.maxLength;
  //taking value from input simply by .value method, also calculating how much characters left
  //for maxCount, I had to trasform string to number, because <strong> doesnt have any value
  const inputSpaceLeft = maxChars - enteredText.value.length;
  console.log(inputSpaceLeft);
  counter.innerHTML = inputSpaceLeft;

  //styling counter parent if it shows 10 chars or lesser
  const counterSpan = document.querySelector(".text-counter");
  //by adding CSS class
  if (inputSpaceLeft === 0) {
    counterSpan.classList.add("error");
    textInput.classList.add("error");
  } 
  else if(counter.textContent <= 10 ) {
    counterSpan.classList.add("warning");
    textInput.classList.add("warning");
    counterSpan.classList.remove("error");
    textInput.classList.remove("error");
  } 
  else {
    counterSpan.classList.remove("warning");
    textInput.classList.remove("warning");
  }
  
  //by changing style directly
  // if(parseInt(counter.textContent) <= 10) {
  //     const counterContainerStyle = CounterContainer.style;
  //     counterContainerStyle.backgroundColor = "rgb(255, 121, 121)";
  //     counterContainerStyle.padding = "0.1rem 0.2rem";
  //     counterContainerStyle.borderRadius = "3px";
  //   } else {
  //   CounterContainer.style = "initial";
  //   };
  console.log(event);
});



// add parameter to the function inside event listener and log him out in console.
// you will see default event object in console containing all data related to event listener and its function
// using event.target you can know what element is attached to listener
// using event.target.value -> you can see what was passed in to to target of event in total
// using event.data -> you can know what was passed in to the element every time even occur

// EXTRA PRACTISE
// Create event checking if maxlength of input was changed and change it if it was