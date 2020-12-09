/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'

// * Global Variables *
const otherTitle = document.getElementById("other-title");

// T-Shirt Info Section
const design = document.querySelector("#design");
const colorMenu = document.querySelector("#color");
const colorOptions = document.querySelectorAll("#color option");

// Activities Section
const checkBox = document.querySelectorAll('input[type="checkbox"]');
const activities = document.getElementsByClassName("activities");
const activity = document.querySelector(".activities");
let totalCost = document.createElement("totalCost");
activity.append(totalCost);
let activityCost = 0;
// console.log(checkBox);
// console.log(activities);
// console.log(activity);
// console.log(totalCost);


// Payment Section
// Validation Section

// On page load, sets focus on "Name" input
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

//********************************************************************************
//T-Shirt Info Section - Displays color options based on 'design' selection
//const designCheck = () => {
  //const selectTheme = new Option('Please Select Design', 'selectdesign');
  colorMenu.hidden = true;
  design.addEventListener("change", (e) => {
    design[0].style.display = "none";
    colorMenu.hidden = false;
    let option = e.target.value;
    for (let i = 0; i < colorOptions.length; i++) {
      colorOptions[i].hidden = true;
      colorOptions[i].removeAttribute("selected", true);
    }

    if (option === 'heart js') {
      [...colorMenu.children].filter(color => {
        const heartCode = String.fromCharCode(parseInt(9829));
        if (color.textContent.includes(heartCode)) {
          color.hidden = false;
          colorMenu[3].setAttribute("selected", true);
        }
      });
      colorMenu[0].style.display = "none"
      colorMenu[1].style.display = "none"
      colorMenu[2].style.display = "none"
    } else if (option === 'js puns') {
          color.hidden = false;
          colorMenu[0].style.display = "block"
          colorMenu[0].setAttribute("selected", true);
          colorMenu[1].style.display = "block"
          colorMenu[2].style.display = "block"
    }
  });
//}
//designCheck();

//********************************************************************************
// Activities Section - Allows selections based on avalibility and displays cost

activity.addEventListener('change', (e) => {
  let event = e.target;
  let dataCost = event.getAttribute('data-cost');
  let parsed = parseInt(dataCost);
  if (event.checked) {
    activityCost += parsed;
    console.log(activityCost);
  } else {
    activityCost -= parsed;
    console.log(activityCost);
  }
totalCost.textContent = `Total: $${activityCost}`;

let dataDayAndTime = event.getAttribute('data-day-and-time');
for (let i = 0; i < checkBox.length; i++) {

  console.log();

}


});


// const activityCheck = () => {
//   const mainCheckbox = checkBox[0];
//   const jsFrameworks = checkBox[1];
//   const jsLibs = checkBox[2];
//   const express = checkBox[3];
//   const jsNodes = checkBox[4];
//   const buildTools = checkBox[5];
//   const npm = checkBox[6];

// Current problem being unchecking boxes doesn't always uncheck
// [1] & [3] conflict, [2] & [4] conflict. If [0] is selected, all are disabled
//display total of checkboxes as they're clicked ( variable select = data-cost )
// jsFrameworks.addEventListener('change', (e) => {
//   let event = e.target;
//   express.disabled = event.checked
//     //display totalCost
// });
//
// jsLibs.addEventListener('change', (e) => {
//   let event = e.target;
//   jsNodes.disabled = event.checked
//     //display totalCost
// });
//
// express.addEventListener('change', (e) => {
//   let event = e.target;
//   jsFrameworks.disabled = event.checked
//     //display totalCost
// });
//
// jsNodes.addEventListener('change', (e) => {
//   let event = e.target;
//   jsLibs.disabled = event.checked
//     //display totalCost
// });


// for (let i = 0; i < checkBox.length; i++) {
//   checkBox[i].addEventListener('change', (e) => {
//   if (checkBox[0].checked) {
//     checkBox[4].disabled = true;
//   }
//   });
// }

// mainCheckbox.addEventListener('change', (e) => {
//   let event = e.target;
//   if (mainCheckbox == event.checked) {
//     for (let i = 1; i < checkBox.length; i++){
//       checkBox[i].disabled = event.checked;
//     }
//   }
//     //display totalCost
// });


//   checkBox.addEventListener('change', (e) => {
//     let event = e.target;
//     for (let i = 0; i < checkBox.length; i++) {
//       if ()
//     }
//
//   });

// }
// activityCheck();

//********************************************************************************


/*
Pseudocode

// Current problem being unchecking boxes doesn't always uncheck
// [1] & [3] conflict, [2] & [4] conflict. If [0] is selected, all are disabled
//display total of checkboxes as they're clicked ( variable select = data-cost )

*/
