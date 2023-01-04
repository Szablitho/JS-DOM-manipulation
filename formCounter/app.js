// document.body.children[1].children[0].href = 'https://google.com';

// my playtime
const btn = document.querySelector(".view-btn");
btn.addEventListener("click", ()=> {
  let moreText = document.querySelector(".moreText");
  if(moreText.className.includes("visibility")) {
  moreText.classList.remove("visibility");
  } else {
    moreText.classList += ' visibility';
  }
});
// end of my playtime

//playing with DOM by drilling inside(not using query selector etc)
let h1 = document.body.children[0];
console.log(h1);
console.log(h1.parentElement);
console.dir(h1.nextElementSibling);
// NOTE: log gives HTML in console, dir gives properties and methods of element

//creating new element,moving them etc
//here creating anchor in a paragraph alredy existing in html
let newAnchorEl = document.createElement('a');
newAnchorEl.style = "display:block;background-color: green;"
newAnchorEl.textContent = "I'm a new anchor inserted by JS";
let paragraph = document.querySelector('p');
paragraph.append(newAnchorEl);

//REMOVING ELEMENTS FROM DOM
let firsth1El = document.querySelector("h1");
// firsth1El.remove(); // for new browser

firsth1El.parentElement.removeChild(firsth1El); // supported in old browsers

// MOVING ELEMENTS(only to bottom of html)
let firstParagraph = document.querySelector("p");
firstParagraph.parentElement.append(firstParagraph);
//basically, append on a chosen by you parent(at bottom of this parent)

//EDITING HTML
firstParagraph.innerHTML = "whatever text and <a href='/'> anchor tag <a> as example";
//or
firstParagraph.textContent = "some text but cant write tags with this method";
//same text method but maybe there is something different in it
firstParagraph.innerText = 'another text and <strong>important tag</strong>';
firstParagraph.innerText += '\n 3rd another shit';
firstParagraph.innerHTML += '\n 4rd another shit';
