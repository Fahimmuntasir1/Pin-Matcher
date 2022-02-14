// pin generation
function getPin() {
  const generatePin = Math.round(Math.random() * 10000);
  const pinString = generatePin + "";
  if (pinString.length == 4) {
    return generatePin;
  } else {
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("showPinDisplay").value = pin;
}

// calculation
document.getElementById("key-pad").addEventListener("click", function (event) {
  const inputNumber = event.target.innerText;
  const showNumber = document.getElementById("display-input");
  if (isNaN(inputNumber)) {
    if (inputNumber == "C") {
      showNumber.value = "";
    }
    if (inputNumber == "<") {
      showNumber.value = showNumber.value.slice(0, -1);
    }
  } else {
    const prevNumber = showNumber.value;
    const newNumber = prevNumber + inputNumber;
    showNumber.value = newNumber;
  }
});
// pin macthmacking
function verifyPin() {
  const displayShow = document.getElementById("showPinDisplay").value;
  const displayInput = document.getElementById("display-input").value;
  const notifyFail = document.getElementById("notify-fail");
  const notifySuccess = document.getElementById("notify-success");
  if (displayShow == displayInput) {
    notifySuccess.style.display = "block";
    notifyFail.style.display = "none";
  } else {
    notifyFail.style.display = "block";
    notifySuccess.style.display = "none";
  }
}
