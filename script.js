function readNumber(ownerObject) {
  let valueInsideElement = ownerObject.innerText;
  displayOnScreen(valueInsideElement);
}
function readOperator(ownerObject) {
  let valueInsideElement = ownerObject.innerText;
  let valueOnScreen = document.querySelector(".screen");
  if (valueOnScreen.innerText == "") {
    return;
  } else {
    displayOnScreen(valueInsideElement);
  }
}

function displayOnScreen(valueInsideElement) {
  let valueOnScreen = document.querySelector(".screen");
  valueOnScreen.innerText += valueInsideElement;
  document.getElementsByClassName("screen").innerText = valueOnScreen;
}
function readAllClear() {
  let valueOnScreen = document.querySelector(".screen");
  valueOnScreen.innerText = "";
}
function readClear() {
  let valueOnScreen = document.querySelector(".screen");
  let number = valueOnScreen.innerText.slice(0, -1);
  valueOnScreen.innerText = number;
}
function readEquals() {
  let valueOnScreen = document.querySelector(".screen");
  let number = valueOnScreen.innerText;
  readAllClear();
  let result = eval(number);
  displayOnScreen(result);
}
