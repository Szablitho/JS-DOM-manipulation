//1st ex
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector("#second-button");
//2nd ex
// firstButton.addEventListener("click", () => {
//   console.dir(firstButton);
// });
// secondButton.addEventListener("click", (event) => {
//   console.dir(event.target);
// });
//3rd ex
const firstParagraph = document.body.children[1].children[1];
const thirdParagraph = document.body.children[1].children[3];
//4th
firstButton.addEventListener("click", () => {
    console.dir(firstButton);
    thirdParagraph.remove();
  });
  secondButton.addEventListener("click", (event) => {
    console.dir(event.target);
    firstParagraph.style.backgroundColor = "blue";
    firstParagraph.classList.add("bigger-font");
  });

