/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'

// Global Variables
const otherTitle = document.getElementById("other-title");

//T-Shirt Info Section
const design = document.querySelector("#design");
const colorMenu = document.querySelector("#color");
const colorOptions = document.querySelectorAll("#color option");

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
}
designCheck();
