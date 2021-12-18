//NOROFF,9-9/21,"SIMPLE FORM VALIDATION", JAVASCRIPT, NOROFF

const cardForm = document.querySelector("#payment-form");
const number = document.querySelector("#cardnumber");
const errorNumber = document.querySelector("#errorNumber");
const name = document.querySelector("#cardname");
const errorName = document.querySelector("#errorName");
const date = document.querySelector("#date");
const errorDate = document.querySelector("#errorDate");
const cvc = document.querySelector("#cvc");
const errorCvc = document.querySelector("#errorCvc");
const submitForm = document.querySelector(".success")



function cardFormValidation() {
    let formIsValid = true;
    event.preventDefault()

    if(checkLength(number.value, 15) === true) {
        errorNumber.style.display = "none";
    }
    else {
        errorNumber.style.display = "block";
        formIsValid = false;
    }

    if(checkLength(name.value, 4) === true) {
        errorName.style.display = "none";
    }
    else {
        errorName.style.display = "block";
        formIsValid = false;
    }

    if(checkLength(date.value, 24) === true){
        errorDate.style.display = "none";
    }
    else {
        errorDate.style.display = "block";
        formIsValid = false;
    }

    if(checkLength(cvc.value, 2) === true){
        errorDate.style.display = "none";
    }
    else {
        errorCvc.style.display = "block";
        formIsValid = false;
    }


    if (formIsValid === true) {
        submitForm.innerHTML = "<h4>Thank you for contacting us. We will be with you shortly.</h4>";
  }


        
    
}


function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
  }


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

contactForm.addEventListener("submit", contactFormValidation);