/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'


// Global Variables
const otherTitle = document.getElementById("other-title");
const design = document.querySelector("#design"); // select design id
const colorDiv = document.getElementById("shirt-colors");  // select div color id
const colorMenu = document.querySelector('#color');

// console.log(design);
// console.log(colorDiv);
// console.log(colorMenu);

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
const fieldcheck = () => {
  colorDiv.hidden = true;

  function shirtText() {
  const option = colorDiv.textContent = "Please select Design"; //alters html
  return;
  }
  //shirtText();

  // Seperating heart code from pun code
  [...colorMenu.children].filter(color => {
    const heartCode = String.fromCharCode(parseInt(9829));  //heart symbol
    if (color.textContent.includes(heartCode)) {
      console.log(color.textContent);
    } else {
      console.log(color.textContent);
    }
  });

  design.addEventListener("change", () => {
    if (design === design.options[0]) {
      return shirtText();
    } else {
      colorDiv.hidden = false
      return colorMenu;
    }
  })
}
fieldcheck();
console.log(design.options[0]);



/* Notes, thoughts, questions, tests

// Selecting <option value from design id
// design.options[0];
// design.options[1];
// design.options[2];

console.log(otherTitle);
console.log(design);
// console.log(colorDiv);
// console.log(colorMenu);
//console.log(color.textContent);

console.log(option);
console.log(selectTheme);

console.log(jsPuns.value);
console.log(design.options[0]);
*/
