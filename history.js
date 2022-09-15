const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount) {


  const timeTakenConvert = parseInt(timeTaken);
  // console.log(timeTaken, "after convert", timeTakenConvert);
  

  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  
    <h3>${questionText}</h3>
    <div>
    <p>You took: <span class="bold">${timeTakenConvert}</span> seconds</p>
    <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
    </div>
 
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");
    const timeTakenConvertNumber = parseInt(test.timeTaken);
    // console.log(test.timeTaken, "after con", timeTakenConvertNumber);

    newRow.innerHTML = `
  <div>
    <h3>${test.questionText}</h3>
    <p class="time-taken">You took: <span class="bold">${timeTakenConvertNumber}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  </div>
  `;

    histories.appendChild(newRow);
  });
}
