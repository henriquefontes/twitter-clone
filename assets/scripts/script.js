"use strict";

import { selectElem, createElem, modifyElem, hideElem } from "./helpers.js";

const registerSections = [
  {
    step: 1,
    section: "register--section-account",
  },
  {
    step: 2,
    section: "register--section-photo",
  },
  {
    step: 3,
    section: "register--section-bio",
  },
  {
    step: 4,
    section: "register--section-username",
  }
]

const setSection = (old, next) => {
  const oldSection = document.querySelector(`.${old}`);
  const nextSection = document.querySelector(`.${next}`);

  hideElem(oldSection, true)
  hideElem(nextSection, false);
}

const finishRegister = () => {
  document.location.href = "home.html";
}

const stepButtons = document.querySelectorAll("[data-next-step]")
  .forEach(button => {
    const sectionIndex = button.getAttribute("data-next-step") - 1;
    const isLastStep = sectionIndex == registerSections.length;

    if (isLastStep) {
      button.addEventListener("click", finishRegister);

      return
    }

    const oldSection = registerSections[sectionIndex - 1].section;
    const nextSection = registerSections[sectionIndex].section;
    
    button.addEventListener("click", () => setSection(oldSection, nextSection));
  });

//

const $loginBtn = selectElem("#login-button");
const $lgnUserInput = selectElem("[data-input='username-login']");
const $lgnPasswordInput = selectElem("[data-input='password-login']");

const loginInputs = [$lgnUserInput, $lgnPasswordInput];

loginInputs.forEach(input => {
  input.addEventListener("keyup", () => {
    const twoInputTyped = $lgnUserInput.value && $lgnPasswordInput.value;
  
    if (twoInputTyped) {
      $loginBtn.className = "form-button active";
      $loginBtn.disabled = false;
    } else {
      $loginBtn.className = "form-button disabled";
      $loginBtn.disabled = true;
    }
    
  })
});


//register container
const $popUp = selectElem("[data-js='popUp']");
const $signUp = selectElem("[data-js='signup-button'");

$signUp.addEventListener("click", () => {
  hideElem($popUp, false);
});

const $rgNameInput = selectElem("[data-input='name-register']");
const $rgEmailInput = selectElem("[data-input='email-register']");
const $rgPasswordInput = selectElem("[data-input='password-register']")
const $registerBtn = selectElem("#register-button");

const registerInputs = [$rgNameInput, $rgEmailInput, $rgPasswordInput];

registerInputs.forEach(input => {
  input.addEventListener("keyup", () => {
    const allInputTyped = $rgNameInput.value && $rgEmailInput.value && $rgPasswordInput.value;

    if (allInputTyped) {
      $registerBtn.className = "form-button active";
      $registerBtn.disabled = false;
    } else {
      $registerBtn.className = "form-button disabled";
      $registerBtn.disabled = true;
    }

  })
});