"use strict";

// function when a click event happens the buttons value is added to an equation area
// that adds the equation area to the display area
// function that clears display and equation area

const gridBtns = document.querySelectorAll(".grid--btns");
const display = document.querySelector(".display--input");
const clearBtn = document.querySelector(".clear--btn");
const equalsBtn = document.getElementById("equals");
const calcFace = document.querySelector(".face--container");
let calcArr = [];
// let clickedValue;

const pushCalc = function (e) {
  calcArr.push(e.target.textContent);
  display.innerHTML = calcArr.join("");
  console.log(calcArr);
};

const pushCalcSpace = function (e) {
  calcArr.push(" ");
  calcArr.push(e.target.textContent);
  calcArr.push(" ");
  display.innerHTML = calcArr.join("");
  console.log(calcArr);
};

const equal = function (arr) {
  const newArr = arr.filter((el) => el !== " ").join("");
  calcArr = [];
  display.innerHTML = eval(newArr);
};

calcFace.addEventListener("click", function (e) {
  if (e.target === equalsBtn) equal(calcArr);
  if (e.target === clearBtn) {
    display.innerHTML = "";
    calcArr = [];
  }
  if (e.target.dataset.button === "operator") pushCalcSpace(e);
  if (e.target.dataset.button === "num") pushCalc(e);
});
