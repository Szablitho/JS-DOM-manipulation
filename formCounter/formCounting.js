let textInput = document.querySelector(".input-text");
textInput.addEventListener("input", (event) => {
  let counter = document.querySelector(".text-counter");
  let maxChars = document.querySelector(".input-text").getAttribute("maxlength");
  //taking value from input simply by .value method, also calculating how much characters left
  //for maxCount, I had to trasform string to number, because <strong> doesnt have any value
  let inputSpaceLeft = parseInt(maxChars) - textInput.value.length;
  counter.innerHTML = inputSpaceLeft;

  //styling counter if it shows 10 or lesser
  let CounterContainer = document.querySelector(".container-counter");
  if(parseInt(counter.textContent) <= 10) {
    //conditional prevents adding warning class more than once
    if(!CounterContainer.className.includes("warning")) {
      CounterContainer.classList += " warning";
    }
  } else {
    CounterContainer.classList.remove("warning");
  };
  console.log(event);
});



// add parameter to the function inside event listener and log him out in console.
// you will see default event object in console containing all data related to event listener and its function
// using event.target you can know what element is attached to listener
// using event.target.value -> you can see what was passed in to to target of event in total
// using event.data -> you can know what was passed in to the element every time even occur

// EXTRA PRACTISE
// Create event checking if maxlength of input was changed and change it if it was