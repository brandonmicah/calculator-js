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

// gridBtns.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     if (
//       e.target.dataset.button === "plus" ||
//       e.target.dataset.button === "minus" ||
//       e.target.dataset.button === "multiply" ||
//       e.target.dataset.button === "divide"
//     ) {
//       pushCalcSpace(e);
//     } else if (e.target.dataset.button === "equals") {
//       console.log(calculate);
//     } else {
//       pushCalc(e);
//     }
//   });
// });

calcFace.addEventListener("click", function (e) {
  if (e.target === equalsBtn) equal(calcArr);
  if (e.target === clearBtn) {
    display.innerHTML = "";
    calcArr = [];
  }
  if (
    e.target.dataset.button === "plus" ||
    e.target.dataset.button === "minus" ||
    e.target.dataset.button === "multiply" ||
    e.target.dataset.button === "divide"
  )
    pushCalcSpace(e);
  if (
    e.target.dataset.button === "zero" ||
    e.target.dataset.button === "one" ||
    e.target.dataset.button === "two" ||
    e.target.dataset.button === "three" ||
    e.target.dataset.button === "four" ||
    e.target.dataset.button === "five" ||
    e.target.dataset.button === "six" ||
    e.target.dataset.button === "seven" ||
    e.target.dataset.button === "eight" ||
    e.target.dataset.button === "nine"
  )
    pushCalc(e);

  //   console.log(e.target)
});

// console.log(calculate);

// clearBtn.addEventListener("click", function () {
//   display.innerHTML = "";
//   calcArr = [];
// });

// equalsBtn.addEventListener("click", function () {});
