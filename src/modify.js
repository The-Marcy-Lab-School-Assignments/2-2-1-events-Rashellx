// These are your event handlers
// Question 1
const clickCounterHandler = (element) => {
  let num = Number(element.target.dataset.clicks)
  num += 1
  element.target.dataset.clicks = num
  if (num === 0) {
    element.target.textContent = "I shouldn't be incline"
  } else if (num === 1) {
    element.target.textContent = "I've been clicked 1 time."
  } else {
    element.target.textContent = `I've been clicked ${num} times!`
  }

};

// Question 2
const handleKeydown = (key) => {
  let updateP = document.getElementById("keydown-tracker")
  updateP.textContent = `You pressed ${key.code}`
};

// We've started this one for you
const handleDelegation = (events) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (events.target.tagName === "BUTTON") {
    resultSpan.textContent = events.target.textContent;
  }
};

const addNewRandomNumber = () => {
  let addNumber = document.querySelector('#random-numbers');
  let newNumber = document.createElement('li');

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  newNumber.textContent = randomNumber;
  addNumber.appendChild(newNumber);


}


// Select the elements and attach your event handlers inside main
const main = () => {
  const accessButton = document.querySelector("#click-button")
  accessButton.addEventListener('click', clickCounterHandler)
  document.body.addEventListener("keydown", handleKeydown)
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);
};

main();
