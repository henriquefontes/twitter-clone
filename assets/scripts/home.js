"use strict";

const $newPostTextArea = document.querySelector("[data-js='newpost-textarea']");

$newPostTextArea.addEventListener("input", () => {
  const lettersCounter = document.querySelector("[data-js='counter']");
  const textLength = $newPostTextArea.value.length;

  $newPostTextArea.style.height = "0px";
  $newPostTextArea.style.height = $newPostTextArea.scrollHeight + "px";
});