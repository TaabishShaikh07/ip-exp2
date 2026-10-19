
const displayElement =
  document.querySelector<HTMLInputElement>("#display");

if (!displayElement) {
  throw new Error(
    "Calculator display not found. Check index.html for id='display'."
  );
}

const display: HTMLInputElement = displayElement;

let current = "0";
let previous = "";
let operator = "";
let resetDisplay = false;

function updateDisplay(): void {
  display.value = current;
}

function calculate(): void {
  const a = Number(previous);
  const b = Number(current);
  let result: number;

  switch (operator) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      if (b === 0) {
        current = "Error";
        updateDisplay();
        return;
      }
      result = a / b;
      break;

    default:
      return;
  }

  if (!Number.isFinite(result)) {
    current = "Error";
  } else {
    current = String(Number(result.toPrecision(12)));
  }

  updateDisplay();
}

const buttons =
  document.querySelectorAll<HTMLButtonElement>(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      current = "0";
      previous = "";
      operator = "";
      resetDisplay = false;
    } else if (action === "delete") {
      if (current === "Error") {
        current = "0";
      } else {
        current =
          current.length > 1 ? current.slice(0, -1) : "0";
      }
    } else if (action === "decimal") {
      if (resetDisplay || current === "Error") {
        current = "0";
        resetDisplay = false;
      }

      if (!current.includes(".")) {
        current += ".";
      }
    } else if (action === "sign") {
      if (current !== "0" && current !== "Error") {
        current = String(-Number(current));
      }
    } else if (action === "operator" && value) {
      if (current === "Error") {
        current = "0";
      }

      if (operator && !resetDisplay) {
        calculate();
      }

      previous = current;
      operator = value;
      resetDisplay = true;
    } else if (action === "equals") {
      if (operator && previous !== "") {
        calculate();
        operator = "";
        previous = "";
        resetDisplay = true;
      }
    } else if (value && /^[0-9]$/.test(value)) {
      if (resetDisplay || current === "Error") {
        current = value;
        resetDisplay = false;
      } else {
        current = current === "0" ? value : current + value;
      }
    }

    updateDisplay();
  });
});

updateDisplay();

console.log("Calculator is ready!");
