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
weather.innerHTML = `64&deg; ICON`;

// setting and cycling through self-care options
let self_care_options = [
  "Drink a glass of water ",
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
  "Take up a new skill--like ceramics!",
  "Take the next 20 minutes as quiet time",
  "Schedule a rest day with your partner or someone close to you",
  "Cuddle with your pet",
  "Schedule a wellness appointment with your doctor or therapist",
  "Invite a friend or chosen family member over to spend some time together",
  "Schedule a massage--schedule monthly massages for bonus points!",
  "Look up new recipe and try it out!",
  "Create some art",
  "Go outside and breathe in some fresh air",
];

let work_options = [
  "Drink a glass of water ",
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
  "Take up a new skill--like ceramics!",
  "Take the next 20 minutes as quiet time",
  "Schedule a rest day with your partner or someone close to you",
  "Cuddle with your pet",
  "Schedule a wellness appointment with your doctor or therapist",
  "Invite a friend or chosen family member over to spend some time together",
  "Schedule a massage--schedule monthly massages for bonus points!",
  "Look up new recipe and try it out!",
  "Create some art",
  "Go outside and breathe in some fresh air",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getOption(list, element) {
  let result = document.querySelector(element);
  result.innerHTML = list[getRandomInt(list.length)];
}

function handleResponse(response) {
  let personalResult = document.querySelector("#personal-result");
  personalResult.innerHTML = response.data.activity;
}

function getBoredAPIOption() {
  const url = "http://www.boredapi.com/api/activity/";

  axios.get(url).then(handleResponse);
}

// add functionality of iterating through lists/responses for options
let selfCareButton = document.querySelector("#self-care-button");
selfCareButton.addEventListener("click", () =>
  getOption(self_care_options, "#self-care-result")
);

let personalButton = document.querySelector("#personal-button");
personalButton.addEventListener("click", getBoredAPIOption);

let workButton = document.querySelector("#work-button");
workButton.addEventListener("click", () =>
  getOption(work_options, "#work-result")
);
