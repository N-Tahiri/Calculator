// Missing: * and / operations, to be added with some fixes

// get base elements
const output = document.getElementById("output");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const numbers = document.querySelectorAll("#number");

// Events
reset.addEventListener("click", () => (output.value = ""));
equal.addEventListener("click", () => pressEqual());

// add eventListeners to number buttons
for (const btn of numbers) {
  btn.addEventListener("click", () => {
    output.value += btn.value;
  });
}

// plus operation
plus.addEventListener("click", () => {
  const testResult = checkExistingOperation(output.value);
  if (testResult) {
    pressEqual();
  } else {
    output.value += "+";
  }
});

// minus operation
minus.addEventListener("click", () => {
  const testResult = checkExistingOperation(output.value);
  if (testResult) {
    pressEqual();
  } else {
    output.value += "-";
  }
});

// functions
function pressEqual() {
  const string = output.value;
  const plusIndex = string.indexOf("+");
  const minusIndex = string.indexOf("-", 1); // if the first number is negative we need to skip the first index
  if (plusIndex != -1) {
    calculate(string, plusIndex, "+");
  }
  if (minusIndex !== -1) {
    calculate(string, minusIndex, "-");
  }
}

function calculate(string, index, operation) {
  const a = string.slice(0, index);
  const b = string.slice(index + 1, string.length);
  switch (operation) {
    case "+": {
      output.value = parseInt(a) + parseInt(b);
      break;
    }
    case "-": {
      output.value = parseInt(a) - parseInt(b);
      break;
    }
  }
}

function checkExistingOperation(string) {
  const plus = string.indexOf("+");
  if (plus !== -1) {
    return true;
    //   } else {
    //     return false;
  }
  const minus = string.indexOf("-", 1);
  if (minus !== -1) {
    return true;
  }
}
