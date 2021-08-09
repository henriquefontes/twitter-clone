"use strict";

import { createElem, modifyElem } from "./helpers.js";

// login page
const $usernameInput = document.getElementById("username-input");
const $passwordInput = document.getElementById("password-input");
const $loginBtn = document.querySelector(".login--main-form-button");

$usernameInput.addEventListener("keyup", () => {
  if($usernameInput.value && $passwordInput.value) {
    $loginBtn.className = "login--main-form-button active";
    $loginBtn.disabled = false;
  } else {
    $loginBtn.className = "login--main-form-button disabled";
    $loginBtn.disabled = true;
  }
})

$passwordInput.addEventListener("keyup", () => {
  if($usernameInput.value && $passwordInput.value) {
    $loginBtn.className = "login--main-form-button active";
    $loginBtn.disabled = false;
  } else {
    $loginBtn.className = "login--main-form-button disabled";
    $loginBtn.disabled = true;
  }
})