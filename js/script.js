/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'

// Global Variables
const otherTitle = document.getElementById("other-title");

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
const designCheck = () => {
  const design = document.querySelector("#design");
  const colorMenu = document.querySelector("#color");
  const colorOptions = document.querySelectorAll('#color option');
  colorMenu.hidden = true;

  design.addEventListener("change", (e) => {
    let option = e.target.value;
    colorMenu.hidden = false;
    for (let i = 0; i < colorOptions.length; i++) {
      colorOptions[i].hidden = true;
      colorMenu.removeAttribute("value", "selected");
    }

    if (option === 'heart js') {
      [...colorMenu.children].filter(color => {
        const heartCode = String.fromCharCode(parseInt(9829));
        if (color.textContent.includes(heartCode)) {
          color.hidden = false;
          //colorMenu.addAttribute("value", "selected");
        }
      });
    }
    // } else if (option === 'js puns') {
    //   color.hidden = false;
    //
    // } else {
    //   colorMenu.value = "Please select Design";
    //}
  });
}
designCheck();

//colorMenu.removeAttribute("colorOptions[i]", "selected");
