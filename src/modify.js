// These are your event handlers
// Question 1
const clickCounterHandler = (elements) => {
  let num = Number(elements.target.dataset.clicks)
  num += 1
  elements.target.dataset.clicks = num
  if (num === 0) {
    elements.target.textContent = `"I haven't been clicked!.`
  } else if (num === 1) {
    elements.target.textContent = `I've been clicked 1 time.`
  } else {
    elements.target.textContent = `I've been clicked ${num} times!`
  }
}
// Question 2
const handleKeydown = (key) => {
  let updateP = document.getElementById("keydown-tracker")
  updateP.textContent = `You pressed ${key.code}`
};

// Question 3
const clickCounterHandler3 = (elements) => {
  let num = Number(elements.target.dataset.clicks)
  num += 1
  elements.target.dataset.clicks = num
  if (num === 0) {
    elements.target.textContent = "I shouldn't be inline"
  } else if (num === 1) {
    elements.target.textContent = "I've been clicked 1 time."
  } else {
    elements.target.textContent = `I've been clicked ${num} times!`
  }
}

// We've started this one for you
const handleDelegation = (events) => {
  const resultSpan = document.querySelector('#delegation-result');
  if (events.target.tagName === "BUTTON") {
    resultSpan.textContent = events.target.textContent;
  }
};
// Question 5
const addNewRandomNumber = () => {
  let addNumber = document.querySelector('#random-numbers');
  let newNumber = document.createElement('li');

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  newNumber.textContent = randomNumber;
  addNumber.appendChild(newNumber);


}


// Select the elements and attach your event handlers inside main
// Select the elements and attach your event handlers inside main
const main = () => {
  const click = document.querySelector("#click-button")
  click.addEventListener('click', clickCounterHandler)
  // Question 2
  document.body.addEventListener('keydown', handleKeydown);
  //Question 3
  const inlineButton = document.getElementById("inline-example");
  inlineButton.addEventListener("click", clickCounterHandler3);
  // Question 4
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);
  //Question 5
  const addNum = document.getElementById("add-random-num")
  addNum.addEventListener("click", addNewRandomNumber)
  // Question 6
  const removeButton = document.getElementById('remove');
  removeButton.addEventListener('click', () => {
    delegationContainer.removeEventListener('click', handleDelegation);
  });
};

main();
