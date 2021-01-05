/*** Techdegree-FullstackJS-Project3-InteractiveForm ***/

'use strict'

/*    Global Variables   */
const otherTitle = document.getElementById("other-title");
const design = document.querySelector("#design");
const colorMenu = document.querySelector("#color");
const colorOptions = document.querySelectorAll("#color option");
const activity = document.querySelector(".activities");
const checkBox = document.querySelectorAll('input[type="checkbox"]');
let totalCost = document.createElement("totalCost");
const payment = document.querySelector("#payment");
const creditcard = document.querySelector("#credit-card");
const paypal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
const form = document.getElementsByTagName('form')[0];
const name = document.querySelector("#name");
const email = document.querySelector("#mail");
const ccNum = document.querySelector("#cc-num")
const zip = document.querySelector("#zip")
const cvv = document.querySelector("#cvv")
const submitButton = document.querySelector('button[type="submit"]');

activity.append(totalCost);
let activityCost = 0;

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
});

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
// colorMenu filter & heartCode provided by robertpm through slack application
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

// Activities Section - Allows selections based on avalibility and dynamically displays total cost
activity.addEventListener('change', (e) => {
  let event = e.target;
  let dataCost = event.getAttribute('data-cost');
  let parsed = parseInt(dataCost);
  if (event.checked) {  //strange error that subtracts into negative total
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

// Payment Section - Displays payment page for each user selection
const pay = (event, option1, option2, option3) => {
  if (payment.value === event) {
    option1.style.display = "block";
    option2.style.display = "none";
    option3.style.display = "none";
  }
}
payment[0].hidden = true;
payment[1].setAttribute("selected", true);
paypal.hidden = true;
bitcoin.hidden = true;
payment.addEventListener("change", () => {
  pay("paypal", paypal, creditcard, bitcoin);
  pay("bitcoin", bitcoin, creditcard, paypal);
  pay("credit card", creditcard, paypal, bitcoin);
});

// Form Validation and Messages Section - Checks for errors using field validators and displays messages based on input

// Error messages
// Reset Errors
// Live Validation



const nameValidator = () => {
  const nameVal = name.value;
  if (nameVal.length > 0) {
    name.style.borderColor = "white";
    return true;
  } else {
    name.style.borderColor = "red";
    return false;
  }
}

const emailValidator = () => {
  const emailVal = email.value;
  let indexOf = emailVal.indexOf("@");
  let lastIndexOf = emailVal.lastIndexOf(".");
  if (indexOf > 1 && lastIndexOf > indexOf + 1) {
    email.style.borderColor = "white";
    return true;
  } else {
    email.style.borderColor = "red";
    return false;
  }
}

const activitiesValidator = () => {
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      activity.style.borderColor = "white";
      return true;
    }
  }
  //activity.style.borderColor = "red"; //Invisible red
  totalCost.append(" - Please select an activity"); //error supplied in multiples of two
  return false;
  }

//if (isNaN) -  Must be number
  const ccValidator = () => {
    const ccVal = ccNum.value;
    if (ccVal.length >= 13 && ccVal.length <= 16) {
      ccNum.style.borderColor = "white";
      return true;
    } else {
      ccNum.style.borderColor = "red";
      return false;
    }
  }

  const zipValidator = () => {
    const zipVal = zip.value;
    if (zipVal.length === 5) {
      zip.style.borderColor = "white";
      return true;
    } else {
      zip.style.borderColor = "red";
      return false;
    }
  }

  const cvvValidator = () => {
    const cvvVal = cvv.value;
    if (cvvVal.length === 3) {
      cvv.style.borderColor = "white";
      return true;
    } else {
      cvv.style.borderColor = "red"
      return false;
    }
  }

  //show element when show is true, hide when false
  // const showOrHideTip = (show, element) => {
  //   if (show) {
  //     element.style.display = "inherit"; //element returns as null - error
  //   } else {
  //     element.style.display = "none"; //element returns as null - error
  //   }
  // }

  const createListener = (validator) => {
    return e => {
      const text = e.target.valid;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      //showOrHideTip(showTip, tooltip);  //HTMLInputElement.<anonymous> - error
    };
  }

name.addEventListener('keyup', createListener(nameValidator));
email.addEventListener('keyup', createListener(emailValidator));
ccNum.addEventListener('keyup', createListener(ccValidator));
zip.addEventListener('keyup', createListener(zipValidator));
cvv.addEventListener('keyup', createListener(cvvValidator));

form.addEventListener('submit', (e) => {

  nameValidator();
  if (!nameValidator()) {
    e.preventDefault();
    //showOrHideTip(); // error
    console.log("Name validator prevented submission");
  }

  emailValidator();
  if (!emailValidator()) {
    e.preventDefault();
    console.log("Email validator prevented submission");
  }

  activitiesValidator();
  if (!activitiesValidator()) {
    e.preventDefault();
    console.log("Activities validator prevented submission");
  }

  if (payment.value === "credit card") {
    ccValidator();
    if (!ccValidator()) {
      e.preventDefault();
      console.log("CC validator prevented submission");
    }

    zipValidator();
    if (!zipValidator()) {
      e.preventDefault();
      console.log("Zip validator prevented submission");
    }

    cvvValidator();
    if (!cvvValidator()) {
      e.preventDefault();
      console.log("CVV validator prevented submission");
    }
  }

});
