// These are your event handlers
const clickCounterHandler = (element) => {
  let num = Number(element.target.dataset.clicks)
  num += 1
  element.target.dataset.clicks = num
  if (num === 0) {
    element.target.textContent = "I haven't been clicked!"
  } else if (num === 1) {
    element.target.textContent = "I've been clicked 1 time."
  } else {
    element.target.textContent = `I've been clicked ${num} times!`
  }

};

const handleKeydown = (key) => {
  let updateP = document.getElementById("keydown-tracker")
  updateP.textContent = `You pressed ${key.code}`
};

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const accessButton = document.querySelector("#click-button")
  accessButton.addEventListener('click', clickCounterHandler)
  document.body.addEventListener("keydown", handleKeydown)
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);


};

main();
