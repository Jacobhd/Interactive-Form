/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'


// Global Variables
const otherTitle = document.getElementById("other-title");
let design = document.querySelector("#design"); // select design id
let colorDiv = document.getElementById("shirt-colors");  // select div color id
let colorMenu = document.querySelector("#color"); // select color id
console.log(design);
console.log(colorDiv);
console.log(colorMenu);

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
function hide() {
  if (design.options[0]) {
    let option = colorDiv.textContent = "Please select Design"; //alters html
  }
}
//hide();

colorDiv.hidden = true;

design.addEventListener("change", (e) => {
  colorDiv.hidden = false;
  let option = e.target.value;
  if (option === design.options[2]) {
    [...colorMenu.children].filter(color => {
      const heartCode = String.fromCharCode(parseInt(9829));
      if (color.textContent.includes(heartCode)) {
        return color.textContent;
      } else if (option === design.options[1]) {
        return color.textContent;
      } else {
        hide();
      }
    });
  }
});


/* Notes, thoughts, questions, tests

selecting <option value from design id
design.options[0];
design.options[1];
design.options[2];

console.log(otherTitle);
console.log(design);
console.log(colorDiv);
console.log(colorMenu);
console.log(color.textContent);

console.log(option);
console.log(selectTheme);

console.log(jsPuns.value);
console.log(design.options[0]);
*/
