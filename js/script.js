/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'

// * Global Variables *
const otherTitle = document.getElementById("other-title");

// T-Shirt Info Section
const design = document.querySelector("#design");
const colorMenu = document.querySelector("#color");
const colorOptions = document.querySelectorAll("#color option");

// Activities Section
const activities = document.getElementsByClassName("activities");
const activity = document.querySelector(".activities");
let totalCost = document.createElement("totalCost");
activity.append(totalCost);
let activityCost = 0;
// console.log(activities);//HTMLCollection [fieldset.activities]
// console.log(activity);  //fieldset class activities
// console.log(totalCost); //<totalcost></totalcost>


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

/********************************************************************************/
//T-Shirt Info Section - Displays color options based on 'design' selection

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

/********************************************************************************/
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
  for (let i = 0; i < activities.length; i++) {
   let input = dataDayAndTime;
   console.log(input); // logs dataDayAndTime of clicked checkbox as string
   console.log(event); // logs entire data of clicked checkbox

  if (input !== activities && input === event) {
    if (input.checked) { //or event.checked
      event.disabled = true;
    } else {
      event.disabled = false;
    }
  }
  }

});

/* Pseudocode -
looping over each activity capturing in 'input' variable
does activity occur at the same day and time as activity that was just clicked?

1. match data dayandtime attribute to data dayandtime attribute the element that was just clicked 'input'
2. is the activity different than the activity just clicked?

Checked by seeing if the activity just clicked is not equal to the activity in the current loop iteration
Both conditions checked by single if statement using && operator
if both conditions are true then this activity needs to be disabled or enabled
depending on whether clicked activity was checked or unchecked

use if/else statement -
if clicked activity was checked, then set the matching activity element's 'disabled' to true
if clicked activity was unchecked, set matching activity element's 'disabled property to false'
*/


/********************************************************************************/

/*

//const checkBox = document.querySelectorAll('input[type="checkbox"]');
//console.log(checkBox);
//console.log(checkBox[2]); //logs checkBox[2] full data

Tests directly before for loop
// console.log(dataDayAndTime); //outside the for loop is giving me day and time (string)- inside null
// console.log(checkBox[2]); //logs checkBox[2] full data

Tests within for loop of activity eventlistener for data-day-and-time
*console.log(input); // logs dataDayAndTime of clicked checkbox as string*
*console.log(event); // logs entire data of clicked checkbox*
//let input = [i];
// console.log(checkBox[i]); //logs main checkbox only
//console.log(input[2]); //logging "e" in tuesday
// console.log(input); //logging [0], [1] each loop [i] separate logs
// console.log(checkBox[i]); //logging checkBox data-cost - single Log
// console.log(event); //logging each checkBox input separate logs
//console.log(checkBox[2][i]); //undefined
// console.log(dataDayAndTime); //null

*/
