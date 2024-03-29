// HAMBURGER
import { toggleMenu } from "./js/hamburger.js";
toggleMenu();

//EYE PASSWORD
document.querySelectorAll(".toggle-password").forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
    const input = document.querySelector(".password-eye");
    if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});

// LOG IN
import { displayLogin } from "./js/logIn.js";
document.querySelector(".login-button").addEventListener("click", function () {
  displayLogin();
});

import { checkEmailLogin, checkPassLogin } from "./js/formLogIn.js";

document.forms.login.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailloginOk = checkEmailLogin();
  let isPasslogiinOk = checkPassLogin();

  let isFormLoginValid = emailloginOk && isPasslogiinOk;

  if (isFormLoginValid) {
    console.log("Tout est Ok pour l'envoi");
  }
});

const debounceLogin = (fn, delay = 500) => {
  let timeoutIdLogin;
  return (...args) => {
    if (timeoutIdLogin) {
      clearTimeout(timeoutIdLogin);
    }
    timeoutIdLogin = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

document.forms.login.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "email":
      checkEmail();
      break;
    case "password":
      checkPass();
      break;
  }
});

//FORGOT PASSWORD
import { displayForgot } from "./js/forgot.js";
document
  .querySelector(".forgot-password")
  .addEventListener("click", function () {
    displayForgot();
  });

//REGISTER
import { displayRegister } from "./js/register.js";
document
  .querySelector(".register-button")
  .addEventListener("click", function () {
    displayRegister();
  });

// FORM REGISTER
import {
  checkName,
  checkFirstName,
  checkStreetNb,
  checkStreetName,
  checkPostalCode,
  checkCity,
  checkPhone,
  checkEmail,
  checkDob,
  checkPass,
  confPass,
  checkCgv,
} from "./js/formRegister.js";

document.forms.register.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameOk = checkName();
  let firstNameOk = checkFirstName();
  let streetNumberOk = checkStreetNb();
  let streetNameOk = checkStreetName();
  let postalCodeOk = checkPostalCode();
  let cityOk = checkCity();
  let phoneOk = checkPhone();
  let emailOk = checkEmail();
  let isAgeOk = checkDob();
  let isPassOk = checkPass();
  let isConfOk = confPass();
  let iscgvOk = checkCgv();

  let isFormValid =
    nameOk &&
    firstNameOk &&
    streetNumberOk &&
    streetNameOk &&
    postalCodeOk &&
    cityOk &&
    phoneOk &&
    emailOk &&
    isAgeOk &&
    isPassOk &&
    isConfOk &&
    iscgvOk;

  if (isFormValid) {
    console.log("Tout est Ok pour l'envoi");
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
   
    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

document.forms.register.addEventListener("input", (e) => {
  switch (e.target.id) {
    case "name":
      checkName();
      break;
    case "first-name":
      checkFirstName();
      break;
    case "street-number":
      checkStreetNb();
      break;
    case "street-name":
      checkStreetName();
      break;
    case "postal-code":
      checkPostalCode();
      break;
    case "city":
      checkCity();
      break;
    case "phone":
      checkPhone();
      break;
    case "email":
      checkEmail();
      break;
    case "dob":
      checkDob();
      break;
    case "password":
      checkPass();
      break;
    case "passwordconfirm":
      confPass();
      break;
    case "cgv":
      checkCgv();
      break;
  }
});

//PRODUCTS
function init() {
  let iddepartmentLinks = document.querySelectorAll(".categories-button");

  iddepartmentLinks.forEach((e) => {
    e.addEventListener("click", () => {
      let iddepartment = e.value;
      console.log(iddepartment);

      let url = `http://localhost:3003/get/products/${iddepartment}`;
      fetchProducts(url);
    });
  });
}

function fetchProducts(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const jsonData = JSON.stringify(data);
      const encodedData = encodeURIComponent(jsonData);
      window.location.href = `products?data=${encodedData}`;
    })
    .catch((error) => console.error("Error:", error));
}

init();
