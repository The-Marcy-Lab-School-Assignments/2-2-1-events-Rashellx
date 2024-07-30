const addButton = () => {
  const addB = document.getElementById('add-one');
  const resultsParagraph = document.getElementById('results');

  let counter = Number(resultsParagraph.textContent)
  counter += 1
  resultsParagraph.textContent = counter;

}

const addB = document.getElementById("add-one")
addB.addEventListener('click', addButton)
