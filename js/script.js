/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'

// * Global Variables *
const otherTitle = document.getElementById("other-title");

// T-Shirt Info Section
const design = document.querySelector("#design");
const colorMenu = document.querySelector("#color");
const colorOptions = document.querySelectorAll("#color option");

// Activities Section
const activity = document.querySelector(".activities");
const checkBox = document.querySelectorAll('input[type="checkbox"]');
let totalCost = document.createElement("totalCost");
activity.append(totalCost);
let activityCost = 0;
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
// Activities Section - Allows selections based on avalibility and displays total cost

activity.addEventListener('change', (e) => {
  let event = e.target;
  let dataCost = event.getAttribute('data-cost');
  let parsed = parseInt(dataCost);
  if (event.checked) {
    activityCost += parsed;
  } else {
    activityCost -= parsed;
  }
  totalCost.textContent = `Total: $${activityCost}`;

  const dataDayAndTime = event.getAttribute('data-day-and-time');
  for (let i = 0; i < checkBox.length; i++) {
   let input = dataDayAndTime;
   const timeIndex = checkBox[i].getAttribute('data-day-and-time');
    if (timeIndex === dataDayAndTime && event !== checkBox[i]) {
      if (event.checked) {
      checkBox[i].disabled = true;
      } else {
        checkBox[i].disabled = false;
      }
    }
  }

});

/* Pseudocode -



/********************************************************************************/

/*



*/
