"use strict";

// function when a click event happens the buttons value is added to an equation area
// that adds the equation area to the display area
// function that clears display and equation area

const gridBtns = document.querySelectorAll(".grid--btns");
const display = document.querySelector(".display--input");

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

gridBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (
      e.target.dataset.button === "plus" ||
      e.target.dataset.button === "minus" ||
      e.target.dataset.button === "multiply" ||
      e.target.dataset.button === "divide"
    ) {
      pushCalcSpace(e);
    } else if (e.target.dataset.button === "equals") {
      console.log(calculate);
    } else {
      pushCalc(e);
    }
  });
});

// console.log(calculate);
