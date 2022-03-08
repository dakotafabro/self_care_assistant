// toggling support content divs
function toggleClasses(divParam) {
  let expand = document.querySelector(divParam);
  if (expand.classList.contains("hidden")) {
    expand.classList.remove("hidden");
  } else {
    expand.classList.add("hidden");
  }
}

let supportOption1 = document.querySelector("#self-care-support");
supportOption1.addEventListener("click", () =>
  toggleClasses("#self-care-expand")
);

let supportOption2 = document.querySelector("#personal-support");
supportOption2.addEventListener("click", () =>
  toggleClasses("#personal-expand")
);

let supportOption3 = document.querySelector("#work-support");
supportOption3.addEventListener("click", () => toggleClasses("#work-expand"));

// setting the date, time, and weather

// setting date
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Decemeber",
];

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();

let today = `${month} ${day}, ${year}`;

let time = document.querySelector("#time");
time.innerHTML = `${today} - ${hours}:${minutes}`;

// setting weather
let weather = document.querySelector("#weather");
weather.innerHTML = `Weather`;

// setting and cycling through self-care options
let self_care_options = [
  "Drink a glass of water",
  "Go for a 10-minute walk",
  "Text a friend",
  "Take 5 deep breaths",
  "Make some tea",
  "Watch your favorite movie",
  "Take a shower",
  "Call a friend",
  "Journal for 10 minutes",
  "Go give some loves to your pet!",
  "Order your favorite food",
  "Get some sunshine",
  "Tell your houseplant positive affirmations",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getSelfCareOption(list, element) {
  let result = document.querySelector(element);
  result.innerHTML = list[getRandomInt(list.length)];
}

let selfCareButton = document.querySelector("#self-care-button");
selfCareButton.addEventListener("click", () =>
  getSelfCareOption(self_care_options, "#self-care-result")
);
