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
  //const selectTheme = new Option('Please Select Design', 'selectdesign');
  colorMenu.hidden = true;

  design.addEventListener("change", (e) => {
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
    }
    if (option === 'js puns') {
      [...colorMenu.children].filter(color => {
        const punCode = String.fromCharCode("Puns");
        if (color.textContent.includes(punCode)) {
          color.hidden = false;
          colorMenu[0].setAttribute("selected", true);
        }
      });
    }
    //if (option === 'Select Theme'){
      //color.hidden = true;
      // colorMenu[6].display = "block";
      // colorMenu[6].setAttribute("selected", true);
    //}
  });
}
designCheck();
