/** @format */

let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.querySelector(".result");
const button = document.querySelector("button");
function calculateAge(input) {
  if (userInput.value === "") {
    return (result.innerHTML =
      "Please Select A Valid Age From The Date Picker.");
  }
  let dob = new Date(input);
  let today = new Date();
  // Age In Milliseconds
  const ageInMilliseconds = today.getTime() - dob.getTime();
  const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) /
      (1000 * 60 * 60 * 24 * 30)
  );
  const day = Math.floor(
    (ageInMilliseconds % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
  );
  if (years === 0) {
    if (month === 0) {
      if (day === 0) {
        return `Welcome To The World`;
      } else if (day === 1) {
        return `You Are a day old`;
      } else {
        return `You Are ${day} days old`;
      }
    }
  }
  return `You are ${years} ${years === 1 ? "year" : "years"} ${month} ${
    month === 1 ? "month" : "months"
  } and ${day} ${day === 1 ? "day old" : "days old"}`;
}

button.addEventListener("click", function () {
  const age = calculateAge(userInput.value);
  result.innerHTML = age;
});
