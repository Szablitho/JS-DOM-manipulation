const user = {
  name: "Wiktor",
  fullname: "Szablewski",
  nickname: "Szab",
  age: 20
}
// object and iterating with for...in loop
const veggies = ["carrots","potatoes","avocados"];
for (const key in user) {
  if (user.hasOwnProperty.call(user, key)) {
    const element = user[key];
    console.log(element);
  }
}

//array and for..of loop
for (const iterator of veggies) {
  console.log(iterator);
}
//anyway, array can be iterated with for..in loop too
for (const key in veggies) {
  if (user.hasOwnProperty.call(veggies, key)) {
    const element = veggies[key];
    console.log(element);
  }
}

//while loop
let isFinished = false;
while(!isFinished) {
  isFinished = confirm("Do you want to continue?");
}
console.log("Have a try of input form!"); //only execetus once while is done executing -> when condition turns to true