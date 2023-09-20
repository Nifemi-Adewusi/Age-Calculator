/** @format */

let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.querySelector(".result");
const button = document.querySelector("button");

function checkInputValue() {
  if (userInput.value === "") {
    return (result.innerHTML =
      "Please select a valid date from the date Picker field");
  } else {
    return calculateAge(userInput.value);
  }
}

function checkDay(day) {
  if (day === 1) {
    return `a day old`;
  } else if (day === 0) {
    return `And it's your birthdate.`;
  } else if (day > 1) {
    return `${day} days old`;
  }
}

function checkMonth(months) {
  if (months === 0) {
    return ``;
  } else if (months === 1) {
    return `,a month and`;
  } else if (months > 1) {
    return `,${months} months and`;
  }
}

function placeHolder(day) {
  if (day === 0) {
    return ``;
  } else {
    return `You are`;
  }
}

function checkYear(year) {
  if (year === 1) {
    return `A year`;
  } else if (year === 0) {
    return "";
  } else if (year > 1) {
    return `${year} years`;
  }
}

function calculateAge(dobInput) {
  const dob = new Date(dobInput);
  const today = new Date();
  //  Date In Milliseconds
  const ageInMilliseconds = today.getTime() - dob.getTime();
  const yearInMilliseconds = 1000 * 60 * 60 * 24 * 365;

  const year = Math.floor(ageInMilliseconds / yearInMilliseconds);
  const month = Math.floor(
    (ageInMilliseconds % yearInMilliseconds) / (1000 * 60 * 60 * 24 * 30)
  );
  const day = Math.floor(
    (ageInMilliseconds % yearInMilliseconds) / (1000 * 60 * 60 * 24)
  );

  return `${placeHolder(day)} ${checkYear(year)} ${checkMonth(
    month
  )} ${checkDay(day)}`;
}

button.addEventListener("click", function () {
  const age = checkInputValue();
  result.innerHTML = age;
});
