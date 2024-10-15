"use strict";

const maleButton = document.querySelector("#male-btn");
const femaleButton = document.querySelector("#female-btn");
const metricButton = document.querySelector("#metric-btn");
const imperialButton = document.querySelector("#imperial-btn");

// if male button is clicked
maleButton.addEventListener("click", function () {
  maleButton.classList.add("btn-active");
  maleButton.classList.remove("btn-not-active");

  femaleButton.classList.add("btn-not-active");
  femaleButton.classList.remove("btn-active");
});

// when female button is clicked
femaleButton.addEventListener("click", function () {
  femaleButton.classList.add("btn-active");
  femaleButton.classList.remove("btn-not-active");

  maleButton.classList.add("btn-not-active");
  maleButton.classList.remove("btn-active");
});

//
const kgLabelAfter = document.querySelector(".cc-kg");
const cmSpan = document.querySelector(".cm-span");
const mSpan = document.querySelector(".m-span");
const mInput = document.querySelector(".m-input");
let cmInput = document.querySelector(".cm-input");
const ageInput = document.querySelector("#ageInput");
let weigthInput = document.querySelector("#weigthInput");

// wehn metric button is called
metricButton.addEventListener("click", function () {
  metricButton.classList.add("btn-active");
  metricButton.classList.remove("btn-not-active");
  imperialButton.classList.add("btn-not-active");
  imperialButton.classList.remove("btn-active");
  kgLabelAfter.textContent = "kg";
  mSpan.textContent = "m";
  cmInput.style.display = "block";
  cmSpan.style.display = "block";
  mInput.style.width = "10%";
});

// wehn imperial button is called
imperialButton.addEventListener("click", function () {
  imperialButton.classList.add("btn-active");
  imperialButton.classList.remove("btn-not-active");
  metricButton.classList.add("btn-not-active");
  metricButton.classList.remove("btn-active");
  kgLabelAfter.textContent = "lbs";
  mSpan.textContent = "inches";
  cmInput.style.display = "none";
  cmSpan.style.display = "none";
  mInput.style.width = "41%";
});

//calculation for male adult
const adultMaleCalc = function (weight, height, age) {
  return 66 + 6.3 * weight + 12.9 * height - 6.8 * age;
};

//calculation for female adult
const adultFemaleCalc = function (weight, height, age) {
  return 654 + 4.3 * weight + 4.7 * height - 4.7 * age;
};

//Calorie intake final calculuation
const calcDailyCalorie = function (bmr, activity) {
  return bmr * activity;
};

// calculation for different activity lebels
const sedentaryCalc = 1.2;
const lActiveCalc = 1.375;
const mActiveCalc = 1.55;
const vActiveCalc = 1.725;
const eActiveCalc = 1.9;

// onto the results now after most is defined
const btnSubmit = document.querySelector(".btn-submit");
const resultBox = document.querySelector("#cc-result-box");
const ccMessage = document.querySelector("#cc-message");

// on click of a button
btnSubmit.addEventListener("click", function () {
  let warning = "";
  if (cmInput.value.length < 2) {
    cmInput.value = "0" + cmInput.value;
  } else if (cmInput.value > 99) {
    warning = "⚠ There is an error";
  }
  let fullHeight = mInput.value + cmInput.value;

  resultBox.style = "block";

  // check if we need to convert metric to imperial
  let weightResult;
  let heightResult;

  //if meters are slected
  if (!imperialButton.classList.contains("btn-active")) {
    weightResult = weigthInput.value * 2.20462;
    heightResult = fullHeight * 0.393702;
  }
  // if imperial is selected, we have to remove the CM and use m input for calculation
  else {
    weightResult = Number(weigthInput.value);
    heightResult = mInput.value;
  }

  let bmrResult;
  if (maleButton.classList.contains("btn-active")) {
    bmrResult = adultMaleCalc(weightResult, heightResult, ageInput.value);
  } else {
    bmrResult = adultFemaleCalc(weightResult, heightResult, ageInput.value);
  }

  const radioButtons = document.querySelector(
    'input[name="activity-level"]:checked'
  ).value;

  let calorieResult;
  /*---- activity levels -----*/
  if (radioButtons === "sedentary") {
    calorieResult = calcDailyCalorie(bmrResult, sedentaryCalc);
  } else if (radioButtons === "lightly-active") {
    calorieResult = calcDailyCalorie(bmrResult, lActiveCalc);
  } else if (radioButtons === "moderately-active") {
    calorieResult = calcDailyCalorie(bmrResult, mActiveCalc);
  } else if (radioButtons === "very-active") {
    calorieResult = calcDailyCalorie(bmrResult, vActiveCalc);
  } else if (radioButtons === "extra-active") {
    calorieResult = calcDailyCalorie(bmrResult, eActiveCalc);
  }

  document
    .querySelector("#cc-result-box")
    .scrollIntoView();

  document.querySelector("#resultNumber").textContent =
    Math.trunc(calorieResult);
});

// on mouse over show and hide info box for ctivity levels
document.querySelector(".info-icon").addEventListener("mouseover", function () {
  document.querySelector(".info-box").style.opacity = "1";
  document.querySelector(".info-box").style.display = "block";
});

document.querySelector(".info-icon").addEventListener("mouseout", function () {
  document.querySelector(".info-box").style.opacity = "0";
  document.querySelector(".info-box").style.display = "none";
});