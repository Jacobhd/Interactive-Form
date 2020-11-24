/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'


// Global Variables
const otherTitle = document.getElementById("other-title");
const design = document.getElementById("design"); // select design id
const colors = document.getElementById("color"); //select color id
let shirtColors = document.getElementById("shirt-colors");  // select div shirt-colors id
// console.log(design);
// console.log(colors);
// console.log(shirtColors);

// On page load sets focus on "Name" input
window.onload = () => {
 document.getElementById("name").focus();
}

// When "other" Job Role is selected, reveals text input w/ focus
otherTitle.style.display = "none";
title.addEventListener("change", () => {
  if (title.value === "other") {
      otherTitle.style.display = "block";
      otherTitle.focus();
  } else {
    otherTitle.style.display = "none";
  }
})

//T-Shirt Info Section
// hide colors with message when select theme is selected and until design is changed
// otherwise when option 1 is selected first 3 index shirtColors
// otherwise when option 2 is selected last 3 shirtcolors

const fieldcheck = () => {

  function shirtText() {
  const option = shirtColors.textContent = "Please select a T-shirt theme"; //alters html
  return;
}

// Selecting <option value from design id
  design.options[0];
  design.options[1];
  design.options[2];
  //console.log(design.options[0]);
  //console.log(design.options[1]);
  //console.log(design.options[2]);

// Select <option value from color id
//jsPunOptions
  const cornFlowerBlue = colors.options[0];
  const darkSlateGrey = colors.options[1];
  const gold = colors.options[2];
//console.log(gold);

//heartJsOptions
  const tomato = colors.options[3];
  const steelBlue = colors.options[4];
  const dimGrey = colors.options[5];
//console.log(tomato);

//  write for loop

shirtText();

  design.addEventListener("change", () => {
    if (design.options[1]) {
      jsPunOptions();
    }
    if (design.options[2]) {
      heartJsOptions();
    }
    if (design.options[0]) {
      shirtText();
    }
  })
}
fieldcheck();

/* Notes, thoughts, questions, tests

console.log(otherTitle);
console.log(design);
console.log(shirtColors);
console.log(colors);
console.log(designSelection);
console.log(shirtColorSelection);

console.log(option);
console.log(selectTheme);

console.log(jsPuns.value);
console.log(heartJs.text);

console.log(jsPunsOptions);
console.log(heartJsOptions);

console.log(cornFlowerBlue);
console.log(darkSlateGrey);
console.log(gold);
console.log(tomato);
console.log(steelBlue);
console.log(dimGrey);

//shirtColors.style.display = "none";
// if (design == design.options[0]) {
//   shirtColors.style.display = "block";
//   shirtColors.textContent = "Please select a T-shirt theme";
// } else {
//   colors;
// }
*/
