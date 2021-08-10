"use strict";

import { createElem, modifyElem } from "./helpers.js";

// login container
const $lgnUserInput = document.getElementById("username-login-input");
const $lgnPasswordInput = document.getElementById("password-login-input");
const $loginBtn = document.getElementById("login-button");

$lgnUserInput.addEventListener("keyup", () => {
  if($lgnUserInput.value && $lgnPasswordInput.value) {
    $loginBtn.className = "form-button active";
    $loginBtn.disabled = false;
  } else {
    $loginBtn.className = "form-button disabled";
    $loginBtn.disabled = true;
  }
});

$lgnPasswordInput.addEventListener("keyup", () => {
  if($lgnUserInput.value && $lgnPasswordInput.value) {
    $loginBtn.className = "form-button active";
    $loginBtn.disabled = false;
  } else {
    $loginBtn.className = "form-button disabled";
    $loginBtn.disabled = true;
  }
});

//register container
const $rgUsernameInput = document.getElementById("username-register-input");
const $rgEmailInput = document.getElementById("email-register-input");
const $registerBtn = document.getElementById("register-button");

$rgUsernameInput.addEventListener("keyup", () => {
  if($rgUsernameInput.value && $rgEmailInput.value) {
    $registerBtn.className = "form-button active";
    $registerBtn.disabled = false;
  } else {
    $registerBtn.className = "form-button disabled";
    $registerBtn.disabled = true;
  }
});

$rgEmailInput.addEventListener("keyup", () => {
  if($rgUsernameInput.value && $rgEmailInput.value) {
    $registerBtn.className = "form-button active";
    $registerBtn.disabled = false;
  } else {
    $registerBtn.className = "form-button disabled";
    $registerBtn.disabled = true;
  }
});

