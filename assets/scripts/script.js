"use strict";

import { createElem, modifyElem } from "./helpers.js";

const registerSections = [
  {
    step: 1,
    section: "register--section-account",
  },
  {
    step: 2,
    section: "register--section-photo",
    storage: {
      src: ""
    }
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

const userStorage = {
  username: "",
  name: "",
  email: "",
  password: "",
  picture: "",
  bio: ""
}

const setSection = (old, next) => {
  const oldSection = document.querySelector(`.${old}`);
  const nextSection = document.querySelector(`.${next}`);

  oldSection.className = `${old} none`;
  nextSection.className = next;
}

const setStorage = () => {

}

const finishRegister = () => {
  document.location.href = "home.html";
}

const stepButtons = document.querySelectorAll("[data-next-step]")
  .forEach(button => {
    const sectionIndex = button.getAttribute("data-next-step") - 1;
    const isLastStep = sectionIndex == registerSections.length;

    if (isLastStep) {
      button.addEventListener("click", () => {
        finishRegister();
      })

      return
    }

    const oldSection = registerSections[sectionIndex - 1].section;
    const nextSection = registerSections[sectionIndex].section;
    
    button.addEventListener("click", () => {
      setSection(oldSection, nextSection);
    })
  });

//

const $loginBtn = document.getElementById("login-button");
const $lgnUserInput = document.querySelector("[data-input='username-login']");
const $lgnPasswordInput = document.querySelector("[data-input='password-login']");

$lgnUserInput.addEventListener("keyup", () => {
  const twoInputTyped = $lgnUserInput.value && $lgnPasswordInput.value;

  if (twoInputTyped) {
    $loginBtn.className = "form-button active";
    $loginBtn.disabled = false;
  } else {
    $loginBtn.className = "form-button disabled";
    $loginBtn.disabled = true;
  }
  
})

$lgnPasswordInput.addEventListener("keyup", () => {
  const twoInputTyped = $lgnUserInput.value && $lgnPasswordInput.value;

  if(twoInputTyped) {
    $loginBtn.className = "form-button active";
    $loginBtn.disabled = false;
  } else {
    $loginBtn.className = "form-button disabled";
    $loginBtn.disabled = true;
  }

});

//register container
const $rgUsernameInput = document.querySelector("[data-input='name-register']");
const $rgEmailInput = document.querySelector("[data-input='email-register']");
const $registerBtn = document.getElementById("register-button");

$rgUsernameInput.addEventListener("keyup", () => {
  const twoInputTyped = $rgUsernameInput.value && $rgEmailInput.value;

  if (twoInputTyped) {
    $registerBtn.className = "form-button active";
    $registerBtn.disabled = false;
  } else {
    $registerBtn.className = "form-button disabled";
    $registerBtn.disabled = true;
  }

});

$rgEmailInput.addEventListener("keyup", () => {
  const twoInputTyped = $rgUsernameInput.value && $rgEmailInput.value;

  if (twoInputTyped) {
    $registerBtn.className = "form-button active";
    $registerBtn.disabled = false;
  } else {
    $registerBtn.className = "form-button disabled";
    $registerBtn.disabled = true;
  }

});